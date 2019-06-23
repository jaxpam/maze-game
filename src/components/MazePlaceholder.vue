<template>
    <div class="maze__placeholder">
        <div class="maze__image">
            <router-link to="/game" class="button button--blue">Start Game</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class MazePlaceholder extends Vue {}
</script>