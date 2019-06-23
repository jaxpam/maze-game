<template>
    <div>
        <div class="modal__wrapper">
            <div class="modal__game-play" v-if="showModal">
                <img :src="`@/assets/svg/${ modal.imageFile }`">
                <h1>{{ modal.title }}</h1>
                <p>{{ modal.body}}</p>
                <button class="button button--outline" @click="closeModal">Continue Play</button>
            </div>
            <div class="modal__game-play" v-else>
                <img class="icon__svg icon__svg--large" src="@/assets/svg/score.svg">
                <h1>Score: {{ score }}</h1>
            </div>
            <div v-show="currentThreat !== null">
                <button
                    @click="eliminateThreat(action)"
                    v-for="action in actions"
                    :key="action.image"
                >
                    <img :src="action.image" class="icon__svg">
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import gameModule from "../store/game/GameStore";
import GameState from "../store/game/GameState";
import Action from "../models/action";
import Modal from "../models/modal";
import Item from "@/models/item";

@Component({})
export default class GamePlayModal extends Vue {
    private showActions = false;

    private get currentThreat() {
        return gameModule.state.currentThreat;
    }

    private get actions() {
        return gameModule.state.actions;
    }

    private get showModal() {
        return gameModule.state.currentModal !== null;
    }

    private get modal() {
        return gameModule.state.currentModal;
    }

    private get score() {
        if (gameModule.state.currentPlayer !== null) {
            return gameModule.state.currentPlayer.playerWealth;
        } else {
            return 0;
        }
    }

    private async eliminateThreat(action: Action) {
        const threatResult = await gameModule.dispatchEliminateThreat({
            action
        });
    }

    private async closeModal() {
        await gameModule.dispatchUpdateModal({ modal: null });
    }
}
</script>