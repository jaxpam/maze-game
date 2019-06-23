import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/store";
// import "./registerServiceWorker";

import NotFound from "./views/NotFound.vue";
import Maze from "./components/Maze.vue";
import GameModal from "./components/GameModal.vue";
import VideoSplash from "./components/VideoSplash.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import MazePlaceholder from "./components/MazePlaceholder.vue";
import GamePlayModal from "./components/GamePlayModal.vue";
import GameComplete from "./components/GameComplete.vue";
import CreditsModal from "./components/CreditsModal.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes: any = [
    {
        path: "/",
        components: {
            left: VideoSplash,
            right: WelcomeScreen
        }
    },
    {
        path: "/start",
        components: {
            left: GameModal,
            right: MazePlaceholder
        }
    },
    {
        path: "/game",
        components: {
            left: GamePlayModal,
            right: Maze,
        }
    },
    {
        path: "/finish",
        components: {
            left: CreditsModal,
            right: GameComplete
        }
    },
    {
        path: "/not_found",
        name: "not_found",
        component: NotFound
    }
];

const router: VueRouter = new VueRouter({
    routes
});

// tslint:disable-next-line:no-unused-expression
new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
