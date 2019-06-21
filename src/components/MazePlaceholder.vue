<template>
    <section class="maze__placeholder">
        <div class="maze__image">
            <router-link to="/game">
                <button class="button button--blue">Enter Game</button>
            </router-link>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class MazePlaceholder extends Vue {}
</script>