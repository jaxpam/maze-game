<template>
    <div id="app">
        <main>
            <router-view/>
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
