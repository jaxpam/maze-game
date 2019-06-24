<template>
    <div class="complete">
        <img src="@/assets/svg/trophy.svg">
        <h1 class="complete__heading">Congratulations</h1>
        <p class="complete__content">
            You managed to save your allotment
            from the rabbits and crows.
        </p>
        <div class="button__wrapper button__wrapper--row">
            <router-link to="/start" class="button button--white">Play Again</router-link>
            <button class="button button--white button--red-font">Exit Maze Game</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class GameComplete extends Vue {}
</script>