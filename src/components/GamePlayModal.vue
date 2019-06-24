<template>
    <div>
        <div class="modal__wrapper">
            <div class="modal__game-play" v-if="showModal">
                <img class="icon__svg--large" :src="`${ modal.image }`">
                <h1 class="modal__heading">{{ modal.title }}</h1>
                <p class="modal__content">{{ modal.body}}</p>
                <button
                    v-show="currentThreat === null"
                    class="button button--outline"
                    @click="closeModal"
                >Continue Play</button>
                <div v-show="currentThreat !== null" class="icon__action-wrapper">
                    <button
                        @click="eliminateThreat(action)"
                        v-for="action in actions"
                        :key="action.image"
                    >
                        <img :src="action.image" class="icon__svg">
                    </button>
                </div>
            </div>
            <div class="modal__game-play" v-else>
                <img class="icon__svg icon__svg--large" src="@/assets/svg/score.svg">
                <h1 class="modal__heading">Score: {{ score }}</h1>
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
        if (threatResult) {
            await gameModule.dispatchSetCurrentThreat({ threat: null });
            await gameModule.dispatchUpdateModal({
                modal: {
                    image: "",
                    title: "You defeated the threat!",
                    body:
                        "You're in luck! The pesky pest didn't touch your strawberry beds, instead it left the allotment."
                }
            });
        } else if (threatResult) {
            await gameModule.dispatchUpdateModal({
                modal: {
                    image: "",
                    title: "Oh dear, that's not quite right!",
                    body:
                        "Try another threat eliminator to shoo the threat away"
                }
            });
        } else {
            await gameModule.dispatchUpdateModal({
                modal: {
                    image: "",
                    title: "Oh dear, that's not quite right!",
                    body: ""
                }
            });
        }
    }

    private async closeModal() {
        await gameModule.dispatchUpdateModal({ modal: null });
    }
}
</script>