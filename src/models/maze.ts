import Room from "./room";

export default class Maze {

    constructor(rooms: Room[]) {
        this.rooms = rooms;
    }

    public rooms: Room[] = [];
}