<template>
    <section class="game">
        <div class="game__modal">
            <game-modal/>
        </div>
        <div class="game__maze">
            <maze-game/>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Maze from "@/components/Maze.vue";
import GameModal from "@/components/GameModal.vue";

@Component({
    components: {
        "maze-game": Maze,
        "game-modal": GameModal
    }
})
export default class Game extends Vue {}
</script>
