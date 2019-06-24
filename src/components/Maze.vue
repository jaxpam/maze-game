<template>
    <div class="maze">
        <div class="maze__button-wrapper">
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
        <div class="maze__icon-container">
            <ul class="maze__icon-wrapper">
                <li
                    @click="setCurrentThreat(threat)"
                    v-for="threat in currentRoomThreats"
                    :key="threat.image"
                >
                    <img :src="threat.image" class="icon__svg">
                </li>
            </ul>

            <ul class="maze__icon-wrapper">
                <li
                    @click="pickUpTreasure(treasure)"
                    v-for="treasure in currentRoomTreasures"
                    :key="treasure.image"
                >
                    <img :src="treasure.image" class="icon__svg">
                </li>
            </ul>
        </div>
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
        if (new InteractionService().makeMove(direction)) {
            this.$router.push("/finish");
        }
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
        await gameModule.dispatchUpdateModal({
            modal: {
                image: "broccoli.svg",
                title: `You picked up a ${treasure.name}`,
                body: treasure.description
            }
        });
        await gameModule.dispatchUpdateModal({
            modal: {
                image: "tomato.svg",
                title: `You picked up a ${treasure.name}`,
                body: treasure.description
            }
        });
    }

    private async setCurrentThreat(threat: Threat): Promise<void> {
        gameModule.dispatchSetCurrentThreat({ threat });
        await gameModule.dispatchUpdateModal({
            modal: {
                image: "./svg/rabbit.svg",
                title: `You bumped into a ${threat.name}`,
                body: "Feed the Rabbit and it'll run away!"
            }
        });
        gameModule.dispatchSetCurrentThreat({ threat });
        await gameModule.dispatchUpdateModal({
            modal: {
                image: "./svg/crow.svg",
                title: `You bumped into a ${threat.name}`,
                body: "Feed the Crow and it'll fly away!"
            }
        });
        gameModule.dispatchSetCurrentThreat({ threat });
        await gameModule.dispatchUpdateModal({
            modal: {
                image: "./svg/snail.svg",
                title: `You bumped into a ${threat.name}`,
                body: "Feed the Snail and it'll go away!"
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