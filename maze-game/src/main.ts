import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/store";
// import "./registerServiceWorker";

import Game from "./views/Game.vue";
import NotFound from "./views/NotFound.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes: any = [
    {
        path: "/",
        redirect: "game"
    },
    {
        path: "/game",
        name: "Game",
        component: Game
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
