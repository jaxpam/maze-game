import Player from "@/models/player";
import Maze from "@/models/maze";
import Room from "@/models/room";
import IGameState from "./IGameState";

export default class GameState implements IGameState {

    public currentPlayer: Player | null = null;
    public initialMaze: Maze | null = null;
    public currentMaze: Maze | null = null;
    public currentRoom: Room | null = null;

}