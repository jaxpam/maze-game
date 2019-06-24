import Item from "./item";
import Passage from "./passage";
import Treasure from './treasure';
import Threat from './threat';
import Action from './action';

export default class Room {

    // DOC: due to limitations in TypeScript, we can't have mixed arrays.
    public treasures: Treasure[] = [];
    public threats: Threat[] = [];
    public north: Passage | null = null;
    public east: Passage | null = null;
    public south: Passage | null = null;
    public west: Passage | null = null;

    public id: number = 0;

}