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
        }
    ];
    public currentRoom: Room | null = new Room();
    currentModal: Modal | null = null;
}

// {
//     north: new Passage(),
//     east: null,
//     south: null,
//     west: null,
//     treasures: [
//         {
//             name: "raspberry",
//             value: 100,
//             image: "./svg/raspberry.svg",
//             description: "Rich in vitamins, antioxidants, and fiber, raspberries are delicious fruits with many health benefits. There are an array of things you could make with raspberries, some of those include: Jam, Cheesecake or add them to your breakfast for sweetness"
//         }
//     ],
//     threats: [
//         {
//             name: "rabbit",
//             isDefeatedBy: {
//                 name: "carrot",
//                 image: "./svg/carrot.svg"
//             },
//             image: "./svg/rabbit.svg",
//             description: ""
//         }
//     ],
// };