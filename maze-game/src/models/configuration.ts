import { Difficulty } from "@/enums/difficulty";

export default class Configuration {
    public rooms: number = 0;
    public maxPassages: number = 0;
    public difficulty: Difficulty = Difficulty.easy;
}