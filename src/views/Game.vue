<template>
    <section>
        <h1>test</h1>
        <maze-game/>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Maze from "@/components/Maze.vue";

@Component({
    components: {
        "maze-game": Maze
    }
})
export default class Game extends Vue {}
</script>
