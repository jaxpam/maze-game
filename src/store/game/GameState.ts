import Player from "@/models/player";
import Maze from "@/models/maze";
import Room from "@/models/room";
import IGameState from "./IGameState";
import Passage from "@/models/passage";
import Treasure from "@/models/treasure";
import Threat from '@/models/threat';

export default class GameState implements IGameState {

    public currentPlayer: Player | null = new Player();
    public initialMaze: Maze | null = null;
    public currentMaze: Maze | null = null;
    public currentRoom: Room | null = {
        north: new Passage(),
        east: null,
        south: null,
        west: null,
        treasures: [
            {
                name: "raspberry",
                value: 100
            }
        ],
        threats: [
            {
                name: "rabbit",
                isDefeatedBy: {
                    name: "carrot"
                }
            }
        ]
    };

}