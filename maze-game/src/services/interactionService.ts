import { Direction } from "@/enums/direction";
import Item from "@/models/item";
import Room from "@/models/room";
import Threat from "@/models/threat";

export default class InteractionService {

    //     public makeMove(direction: Direction): boolean {
    //         // get current room from Game store
    //         const currentRoom: Room = new Room();
    //         let canMove: boolean = false;

    //         switch (direction) {
    //             case Direction.north:
    //                 if (currentRoom.north !== null) {
    //                     canMove = true;
    //                 }
    //                 break;
    //             case Direction.east:
    //                 if (currentRoom.east !== null) {
    //                     canMove = true;
    //                 }
    //                 break;
    //             case Direction.south:
    //                 if (currentRoom.south !== null) {
    //                     canMove = true;
    //                 }
    //                 break;
    //             case Direction.west:
    //                 if (currentRoom.west !== null) {
    //                     canMove = true;
    //                 }
    //                 break;
    //         }
    //         if (currentRoom.items.length > 0) {
    //             currentRoom.items.forEach(item => {
    //                 if (item as Threat !== null) {
    //                     canMove = false;
    //                 }
    //             });
    //         }
    //         // if (canMove) {

    //         // }
    //     }
}