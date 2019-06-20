<template>
    <div>
        <ul class="icon__wrapper">
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/broccoli.svg">
                <h4 class="icon__heading">Broccoli</h4>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/raspberry.svg">
                <h4 class="icon__heading">Raspberry</h4>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/crow.svg">
                <h4 class="icon__heading">Crow</h4>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/rabbit.svg">
                <h4 class="icon__heading">Rabbit</h4>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/carrot.svg">
                <h4 class="icon__heading">Carrot</h4>
            </li>
            <li class="icon__container">
                <img class="icon__svg" src="@/assets/svg/seed.svg">
                <h4 class="icon__heading">Seed</h4>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class GameIcons extends Vue {}
</script>
