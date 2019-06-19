import Player from "@/models/player";
import Maze from "@/models/maze";
import Room from "@/models/room";

export default interface IGameState {
    currentPlayer: Player | null;
    initialMaze: Maze | null;
    currentMaze: Maze | null;
    currentRoom: Room | null;
}