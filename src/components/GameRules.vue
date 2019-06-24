<template>
    <div>
        <h1 class="modal__heading">Game Rules</h1>
        <p
            class="modal__content"
        >Collect all of the treasures, in this case treasures are Raspberries, Broccoli and Tomatoes. The more treasures you more points you’ll recieve.</p>
        <p
            class="modal__content"
        >Along the way you might bump into some threats, these include Rabbits, Snails and Crows. You will need to defeat the threats to win the game, to beat the threats you will need to use the threat eliminating object to remove it from the game.</p>
        <ul class="modal__content">
            <li>Rabbit - Carrot</li>
            <li>Snail - Salt</li>
            <li>Crow - Seeds</li>
        </ul>
        <p
            class="modal__content"
        >Each room has up to 3 passages, some will lead to other rooms within the maze. Some exits may not lead to any where.</p>
        <p
            class="modal__content"
        >Collect all of the treasure and eliminate the threats to win the game.</p>
        <div class="icon__list-wrapper">
            <ul class="icon__wrapper">
                <li class="icon__heading">Treasure:</li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/broccoli.svg">
                    <p class="icon__subheading">Broccoli</p>
                </li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/raspberry.svg">
                    <p class="icon__subheading">Raspberry</p>
                </li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/tomato.svg">
                    <p class="icon__subheading">Tomato</p>
                </li>
            </ul>
            <ul class="icon__wrapper">
                <li class="icon__heading">Threat:</li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/rabbit.svg">
                    <p class="icon__subheading">Rabbit</p>
                </li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/crow.svg">
                    <p class="icon__subheading">Crow</p>
                </li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/snail.svg">
                    <p class="icon__subheading">Snail</p>
                </li>
            </ul>
            <ul class="icon__wrapper">
                <li class="icon__heading">Action:</li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/carrot.svg">
                    <p class="icon__subheading">Carrot</p>
                </li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/seed.svg">
                    <p class="icon__subheading">Seed</p>
                </li>
                <li class="icon__container">
                    <img class="icon__svg" src="@/assets/svg/salt.svg">
                    <p class="icon__subheading">Salt</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class GameRules extends Vue {}
</script>