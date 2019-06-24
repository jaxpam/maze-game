<template>
    <div class="maze">
        <div class="maze__arrow maze__arrow--column">
            <button
                class="button button--white"
                @click="makeMove(1)"
                v-if="currentRoom.north !== null"
            >north</button>
            <button
                class="button button--white"
                @click="makeMove(3)"
                v-if="currentRoom.south !== null"
            >south</button>
        </div>
        <div class="maze__arrow maze__arrow--row">
            <button
                class="button button--white"
                @click="makeMove(2)"
                v-if="currentRoom.east !== null"
            >east</button>
            <button
                class="button button--white"
                @click="makeMove(4)"
                v-if="currentRoom.west !== null"
            >west</button>
        </div>
        <ul>
            <li
                @click="setCurrentThreat(threat)"
                v-for="threat in currentRoomThreats"
                :key="threat.image"
            >
                <img :src="threat.image" class="icon__svg">
            </li>
        </ul>

        <ul>
            <li
                @click="pickUpTreasure(treasure)"
                v-for="treasure in currentRoomTreasures"
                :key="treasure.image"
            >
                <img :src="treasure.image" class="icon__svg">
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gameModule from "../store/game/GameStore";
import InteractionService from "@/services/interactionService";
import { Direction } from "../enums/direction";
import Threat from "../models/threat";
import Treasure from "../models/treasure";
import MazePlaceholder from "./MazePlaceholder.vue";

@Component({
    components: {
        "maze-placeholder": MazePlaceholder
    }
})
export default class Maze extends Vue {
    private get currentRoom() {
        return gameModule.state.currentRoom;
    }

    private makeMove(direction: Direction) {
        new InteractionService().makeMove(direction);
    }

    private get currentRoomThreats(): Threat[] {
        if (this.currentRoom !== null) {
            return this.currentRoom.threats;
        } else {
            return [];
        }
    }

    private get currentRoomTreasures(): Treasure[] {
        if (this.currentRoom !== null) {
            return this.currentRoom.treasures;
        } else {
            return [];
        }
    }

    private async pickUpTreasure(treasure: Treasure): Promise<void> {
        await new InteractionService().addTreasureToPlayerWealth(treasure);
        await gameModule.dispatchSetCurrentThreat({ threat: null });
        await gameModule.dispatchUpdateModal({
            modal: {
                image: "raspberry.svg",
                title: `You picked up a ${treasure.name}`,
                body: treasure.description
            }
        });
    }

    private async setCurrentThreat(threat: Threat): Promise<void> {
        gameModule.dispatchSetCurrentThreat({ threat });
        await gameModule.dispatchUpdateModal({
            modal: {
                image: "rabbit.svg",
                title: `You bumped into a ${threat.name}`,
                body: "Feed the Rabbit and he'll run away!"
            }
        });
    }

    private async created() {
        if (gameModule.state.currentMaze !== null) {
            gameModule.dispatchSetCurrentRoom({
                room:
                    gameModule.state.currentMaze.rooms[
                        Math.floor(
                            Math.random() *
                                Math.floor(
                                    gameModule.state.currentMaze.rooms.length
                                )
                        )
                    ]
            });
        }
    }
}
</script>