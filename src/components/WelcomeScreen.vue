<template>
    <div class="welcome__content">
        <div class="welcome__title-wrapper">
            <h1 class="welcome__title">Stop those pesky rabbits and birds from eating your veggies!</h1>
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
            <button @click="signUp" class="button button--white">Enter Game</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class WelcomeScreen extends Vue {
    private async signUp() {
        // TODO: Need to implement User Service, to validate the fields.
        this.$router.push({ path: "/start" });
    }
}
</script>

