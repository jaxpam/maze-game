import Action from "./action";
import Item from "./item";

export default class Threat extends Item {
    public isDefeatedBy: Action = new Action();
}