import Player from "@/models/player";
import Maze from "@/models/maze";
import Room from "@/models/room";
import Action from "@/models/action";
import Threat from "@/models/threat";

export default interface IGameState {
    currentPlayer: Player | null;
    initialMaze: Maze | null;
    currentMaze: Maze | null;
    actions: Action[];
    currentRoom: Room | null;
    currentThreat: Threat | null;

}