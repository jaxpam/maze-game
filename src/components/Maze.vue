<template>
    <section>
        <h1>Test</h1>
        <div>
            <h1></h1>
            <button>{{ numberOfMazeRooms }} test</button>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gameModule from "../store/game/GameStore";

@Component({})
export default class Maze extends Vue {
    private get numberOfMazeRooms() {
        return gameModule.numberOfRooms;

        console.log(this.numberOfMazeRooms);
    }
}
</script>