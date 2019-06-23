<template>
    <div>
        <div class="modal__wrapper">
            <game-rules/>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GameRules from "./GameRules.vue";

@Component({
    components: {
        "game-rules": GameRules
    }
})
export default class GameModal extends Vue {}
</script>