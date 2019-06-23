<template>
    <div>
        <h1 class="modal__heading">Game Rules</h1>
        <p
            class="modal__content"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis dicta illo placeat dolorum. Reiciendis sit ea minus alias, minima dolores voluptatem labore mollitia accusamus sequi officiis illo, ipsa autem.</p>
        <ul class="icon__wrapper">
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/broccoli.svg">
                <p class="icon__heading">Broccoli</p>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/raspberry.svg">
                <p class="icon__heading">Raspberry</p>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/crow.svg">
                <p class="icon__heading">Crow</p>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/rabbit.svg">
                <p class="icon__heading">Rabbit</p>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/carrot.svg">
                <p class="icon__heading">Carrot</p>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/seed.svg">
                <p class="icon__heading">Seed</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class GameRules extends Vue {}
</script>