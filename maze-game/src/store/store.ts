import { getStoreBuilder } from "vuex-typex";

import Vue from "vue";
import Vuex, { Store } from "vuex";
import "@/store/admin/GameStore";
import IGameState from "./game/IGameState";

export interface IRootState {
    gameModule: IGameState;
}

Vue.use(Vuex);

const store: Store<IRootState> = getStoreBuilder<IRootState>().vuexStore();

export default store;
