<template>
    <div class="welcome__block">
        <section>
            <video class="welcome__video" autoplay loop>
                <source src="@/assets/video/main.mp4" type="video/mp4">
            </video>
        </section>
        <section class="welcome__content">
            <div class="welcome__title-wrapper">
                <h1
                    class="welcome__title"
                >Stop those pesky rabbits and birds from eating your veggies!</h1>
            </div>
            <div class="welcome__input-wrapper">
                <div class="welcome__input">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">
                </div>
                <div class="welcome__input">
                    <label for="email">Email:</label>
                    <input type="email" id="name" name="email">
                </div>
            </div>
            <div>
                <router-link to="/game">
                    <button class="button button--white">Enter Game</button>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class WelcomeScreen extends Vue {}
</script>