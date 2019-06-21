<template>
    <div class="modal__wrapper">
        <game-rules/>
        <game-icons/>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GameIcons from "./GameIcons.vue";
import GameRules from "./GameRules.vue";

@Component({
    components: {
        "game-icons": GameIcons,
        "game-rules": GameRules
    }
})
export default class GameModal extends Vue {}
</script>