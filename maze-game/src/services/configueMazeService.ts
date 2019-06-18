import Maze from "@/models/maze";
import Room from '@/models/room';
import Passage from '@/models/passage';

export default class configureMazeService {

    private fileContent: string = "";

    public maze: Maze | null = null;

    private foundExit: boolean = false;

    public uploadConfiguration(fileName: string) {
        // https://stackoverflow.com/questions/30453409/reading-a-text-file-using-javascript



        // this.fileContent = result;

    }

    public validateConfiguration(): string[] {
        let errors: string[] = [];
        let maze: Maze | null = null;

        try {
            maze = JSON.parse(this.fileContent) as Maze;
        } catch (error) {
            errors.push(error.message);
        }

        if (maze != null) {
            // add validation
            // create boolean called found exit

            // loop through each rooms
            maze.rooms.forEach(room => {
                this.validateRoom(room);
            });


        } else {
            errors.push("Maze does not exist, please try again");

        }
        if (errors.length === 0) {
            this.maze = maze
        }
        return errors;
    }

    private validateRoom(room: Room) {
        let passages: Passage[] = [];

        // passages.forEach(passages => {
        //     if(room.north != null) {}

        // });

        // foreach room, create an array of passages
        // check n, e, s, w != null add to array
        // check isExit and then set exit is true
        // if both true throw error.
        // then check is passage.length is > 1 && < 4 === okay

        // dECORATOR PATTERN
        // loop through each items in each room
        // check the name is not empty
        // if treasure integer value is undefined cast as 'threat'
        // check value is > 0
        // create another array called typedItems add the above casted items to the array
        // set typedItems to a new []
    }
}