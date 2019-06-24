import Maze from "@/models/maze";
import Room from "@/models/room";
import Passage from "@/models/passage";
import Configuration from "@/models/configuration";
import { Direction } from "@/enums/direction";
import { Difficulty } from '@/enums/difficulty';
import Threat from '@/models/threat';
import Treasure from '@/models/treasure';

export default class ConfigureMazeService {

    private readonly availableThreats: Threat[] = [{
        name: "rabbit",
        isDefeatedBy: {
            name: "carrot",
            image: "./svg/carrot.svg"
        },
        image: "./svg/rabbit.svg",
        description: ""
    },
    {
        name: "crow",
        isDefeatedBy: {
            name: "seed",
            image: "./svg/seed.svg"
        },
        image: "./svg/crow.svg",
        description: ""
    },
    {
        name: "slug",
        isDefeatedBy: {
            name: "seed",
            image: "./svg/pellet.svg"
        },
        image: "./svg/slug.svg",
        description: ""
    }
    ];


    private readonly availableTreasures: Treasure[] = [
        {
            name: "raspberry",
            value: 100,
            image: "./svg/raspberry.svg",
            description: "Rich in vitamins, antioxidants, and fiber, raspberries are delicious fruits with many health benefits. There are an array of things you could make with raspberries, some of those include: Jam, Cheesecake or add them to your breakfast for sweetness"
        },
        {
            name: "broccoli",
            value: 50,
            image: "./svg/broccoli.svg",
            description: "Green and high in iron."
        },
        {
            name: "tomato",
            value: 25,
            image: "./svg/tomoto.svg",
            description: "Red and glistening in the sun."
        }
    ];

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

    public generateMaze(configuration: Configuration): Maze {
        // initialise a list of rooms and passages
        const rooms: Room[] = [];
        const passages: Passage[] = [];

        // loop through desired room quantity
        for (let i: number = configuration.rooms; i > 0; i--) {
            const room: Room = new Room();
            room.id = i;
            // get a random number of passages to attached to this room
            const passageNumber: number = this.getRandomNumber(1, configuration.maxPassages);

            // begin to link passages to this room or create a new passage if none found
            for (let i: number = passageNumber; i > 0; i--) {
                let passage: Passage | undefined = passages.find(passage => passage.exit === null);
                if (passage === undefined) {
                    passage = new Passage();
                    passages.push(new Passage());

                }

                // get direction to attach passage to
                const randomNumberDirection: number = this.getRandomNumber(1, 4);
                switch (randomNumberDirection) {
                    case 1:
                        room.north = passage;
                        break;
                    case 2:
                        room.east = passage;
                        break;
                    case 3:
                        room.south = passage;
                        break;
                    case 4:
                        room.west = passage;
                        break;
                }

                // check to see it the passage is an entrance of exit
                if (passage.entrance == null) {
                    passage.entrance = room;
                } else {
                    passage.exit = room;
                }

                passages.push(passage);
            }

            // choosing a number of threats based on difficulty.
            let difficultyMultiplier: number = 1;
            switch (configuration.difficulty) {
                case Difficulty.easy:
                    difficultyMultiplier = 1;
                    break;
                case Difficulty.medium:
                    difficultyMultiplier = 2;
                    break;
                case Difficulty.hard:
                    difficultyMultiplier = 3;
                    break;

            }

            const numberOfThreats: number = this.getRandomNumber(0, difficultyMultiplier);
            if (numberOfThreats > 0) {

                for (let i: number = 0; i < numberOfThreats; i++) {
                    const threat: Threat = this.availableThreats[
                        this.getRandomNumber(0, this.availableThreats.length)
                    ];
                    if (threat !== undefined) {
                        room.threats.push(threat);
                    }
                }
            }

            const numberOfTreasures: number = this.getRandomNumber(0, difficultyMultiplier);
            if (numberOfTreasures > 0) {

                for (let i: number = 0; i < numberOfTreasures; i++) {
                    const treasure: Treasure = this.availableTreasures[
                        this.getRandomNumber(0, this.availableTreasures.length)
                    ];

                    if (treasure !== undefined) {
                        room.treasures.push(treasure);
                    }
                }
            }

            rooms.push(room);
        }

        // find a random passage where the exit is null

        const passagesWithoutExits: Passage[] = passages.filter(passage => passage.exit === null);

        passagesWithoutExits[this.getRandomNumber(0, passagesWithoutExits.length)].isExit = true;

        return new Maze(rooms);

    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


}