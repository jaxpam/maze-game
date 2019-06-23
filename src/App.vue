<template>
    <div id="app">
        <main>
            <router-view tag="section" class="app__information" name="left"></router-view>
            <router-view tag="section" class="app__game" name="right"></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/scss/master/styles";
</style>
