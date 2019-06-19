import Item from "./item";
import Passage from "./passage";

export default class Room {
    public items: Item[] = [];
    public north: Passage | null = null;
    public east: Passage | null = null;
    public south: Passage | null = null;
    public west: Passage | null = null;

}