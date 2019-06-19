import Room from "./room";

export default class Passage {
    public isExit: boolean = false;
    public entrance: Room | null = null;
    public exit: Room | null = null;

}