<template>
    <section class="maze">
        <div>
            <h1></h1>
            <button @click="makeMove(Direction.north)" v-if="currentRoom.north !== null">north</button>
            <button @click="makeMove(Direction.east)" v-if="currentRoom.east !== null">east</button>
            <button @click="makeMove(Direction.south)" v-if="currentRoom.south !== null">south</button>
            <button @click="makeMove(Direction.west)" v-if="currentRoom.west !== null">west</button>
        </div>

        <ul>
            <li
                @click="setCurrentThreat(threat)"
                v-for="threat in currentRoomThreats"
                :key="threat.name"
            >{{threat.name}}</li>
        </ul>

        <ul>
            <li
                @click="pickUpTreasure(treasure)"
                v-for="treasure in currentRoomTreasures"
                :key="treasure.name"
            >{{treasure.name}}</li>
        </ul>
    </section>
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
        await gameModule.dispatchUpdateModal({
            modal: {
                imageFile: treasure.itemImage,
                title: `You picked up a ${treasure.name}`,
                body: treasure.description
            }
        });
    }

    private async setCurrentThreat(threat: Threat): Promise<void> {
        gameModule.dispatchSetCurrentThreat({ threat });
        await gameModule.dispatchUpdateModal({
            modal: {
                imageFile: threat.itemImage,
                title: `You bumped into a ${threat.name}`,
                body: threat.description
            }
        });
    }
}
</script>