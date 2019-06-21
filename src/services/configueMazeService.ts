import Maze from "@/models/maze";
import Room from "@/models/room";
import Passage from "@/models/passage";
import Configuration from "@/models/configuration";
import { Direction } from "@/enums/direction";

export default class ConfigureMazeService {

    private fileContent: string = "";

    public maze: Maze | null = null;

    private foundExit: boolean = false;

    // public uploadConfiguration(fileName: string) {
    //     // https://stackoverflow.com/questions/30453409/reading-a-text-file-using-javascript

    //     // this.fileContent = result;

    // }

    public validateConfiguration(configuration: Configuration): string[] {
        const errors: string[] = [];

        if (configuration.rooms > 100 || configuration.rooms < 2) {
            errors.push("Rooms must be between 2 and 100");
        }
        if (configuration.maxPassages > 4 || configuration.maxPassages < 1) {
            errors.push("There should be between 1 and 4 passages");
        }

        return errors;
    }

    // public generateMaze(configuration: Configuration) {
    //     // initialise a list of rooms and passages
    //     const rooms: Room[] = [];
    //     const passages: Passage[] = [];

    //     // loop through desired room quantity
    //     for (let i: number = configuration.rooms; i > 0; i--) {
    //         const room: Room = new Room();

    //         // get a random number of passages to attached to this room
    //         const passageNumber: number = this.getRandomNumber(configuration.maxPassages);

    //         // begin to link passages to this room or create a new passage if none found
    //         for (let i: number = passageNumber; i > 0; i--) {
    //             let passage: Passage | undefined = passages.find(passage => passage.exit === null);
    //             if (passage === undefined) {
    //                 passage = new Passage();
    //                 passages.push(new Passage());

    //             }

    //             // get direction to attach passage to
    //             const randomNumberDirection: number = this.getRandomNumber(4);
    //             switch (randomNumberDirection) {
    //                 case 1:
    //                     room.north = passage;
    //                 case 2:
    //                     room.east = passage;
    //                 case 3:
    //                     room.south = passage;
    //                 case 4:
    //                     room.west = passage;
    //             }

    //             // check to see it the passage is an entrance of exit
    //             if (passage.entrance !== null) {
    //                 passage.entrance = room;
    //             } else {
    //                 passage.exit = room;
    //             }
    //         }
    //         // rand only initialise the rooms
    //         // threat and treasures
    //     }

    //     // find a random passage where the exit is null
    //     // set the boolean isExit to true = defines the end of the game
    // }

    private getRandomNumber(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }


}