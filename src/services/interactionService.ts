import { Direction } from "@/enums/direction";
import Item from "@/models/item";
import Room from "@/models/room";
import Threat from "@/models/threat";
import gameModule from "@/store/game/GameStore";
import Passage from "@/models/passage";
import Treasure from "@/models/treasure";

export default class InteractionService {

    public makeMove(direction: Direction): boolean {
        let canMove: boolean = false;
        // due to room structure, we must store passage later.
        let passage: Passage = new Passage();

        // first get currentRoom
        let currentRoom: Room = new Room();
        if (gameModule.state.currentRoom !== null) {
            currentRoom = gameModule.state.currentRoom;

            // get passage for the given direction.
            switch (direction) {
                case Direction.north:
                    if (currentRoom.north !== null) {
                        canMove = true;
                        passage = currentRoom.north;
                    }
                    break;
                case Direction.east:
                    if (currentRoom.east !== null) {
                        canMove = true;
                        passage = currentRoom.east;
                    }
                    break;
                case Direction.south:
                    if (currentRoom.south !== null) {
                        canMove = true;
                        passage = currentRoom.south;
                    }
                    break;
                case Direction.west:
                    if (currentRoom.west !== null) {
                        canMove = true;
                        passage = currentRoom.west;
                    }
                    break;
            }

            // check no threats exist before moving.
            if (currentRoom.threats.length > 0) {
                canMove = false;
            }

            // finally make move by updating current room.
            if (canMove) {
                console.log("moves ", passage.entrance, passage.exit);
                // to try and stop the user from getting stuck in a room, try and find the right end of the passage.
                if (passage.exit === currentRoom && passage.entrance !== null) {
                    gameModule.dispatchSetCurrentRoom({ room: passage.entrance });

                } else if (passage.exit !== null) {
                    gameModule.dispatchSetCurrentRoom({ room: passage.exit });
                }
            }
        }
        console.log("finally ", canMove);
        return canMove;
    }

    public async addTreasureToPlayerWealth(treasure: Treasure): Promise<void> {
        await gameModule.dispatchPickUpTreasure({ treasure });
    }

}