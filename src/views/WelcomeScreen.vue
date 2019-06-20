<template>
    <div class="welcome__block">
        <section>
            <video class="welcome__video" autoplay>
                <source src="@/assets/video/main.mp4" type="video/mp4">
            </video>
        </section>
        <section class="welcome__content">
            <div class="welcome__title">
                <h1>Stop those pesky rabbits and birds from eating your veggies!</h1>
            </div>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="name" name="email">
            </div>
            <router-link to="/game">
                <button>Enter Game</button>
            </router-link>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class WelcomeScreen extends Vue {}
</script>