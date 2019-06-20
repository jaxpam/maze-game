<template>
    <div class="modal__wrapper">
        <game-icons/>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GameIcons from "./GameIcons.vue";

@Component({
    components: {
        "game-icons": GameIcons
    }
})
export default class GameModal extends Vue {}
</script>