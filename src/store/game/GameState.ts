import Player from "@/models/player";
import Maze from "@/models/maze";
import Room from "@/models/room";
import IGameState from "./IGameState";
import Passage from "@/models/passage";
import Treasure from "@/models/treasure";
import Threat from "@/models/threat";
import Action from "@/models/action";
import Modal from "@/models/modal";

export default class GameState implements IGameState {

    public currentPlayer: Player | null = new Player();
    public initialMaze: Maze | null = null;
    public currentMaze: Maze | null = null;
    public currentThreat: Threat | null = null;
    public actions: Action[] = [
        {
            name: "carrot",
            image: "./svg/carrot.svg"
        },
        {
            name: "seed",
            image: "./svg/seed.svg"
        },
        {
            name: "salt",
            image: "./svg/salt.svg"
        }
    ];
    public currentRoom: Room | null = new Room();
    currentModal: Modal | null = null;
}



