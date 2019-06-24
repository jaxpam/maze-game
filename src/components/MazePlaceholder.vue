<template>
    <div class="maze__placeholder">
        <div class="maze__image">
            <button @click="startGame" class="button button--blue">Start Game</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ConfigureMazeService from "../services/configueMazeService";
import Configuration from "../models/configuration";
import { Difficulty } from "../enums/difficulty";
import gameModule from "../store/game/GameStore";

@Component({})
export default class MazePlaceholder extends Vue {
    private startGame() {
        const configureMazeService = new ConfigureMazeService();
        const configuration: Configuration = {
            maxPassages: 3,
            rooms: 10,
            difficulty: Difficulty.medium
        };

        if (configureMazeService.validateConfiguration(configuration)) {
            const initialMaze = configureMazeService.generateMaze(
                configuration
            );
            gameModule.dispatchSetCurrentMaze({
                maze: initialMaze
            });
            // gameModule.dispatchSetInitialMaze({ maze: initialMaze });
        }
        this.$router.push({ path: "/game" });
    }
}
</script>