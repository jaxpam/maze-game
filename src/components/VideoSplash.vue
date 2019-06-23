<template>
    <video class="welcome__video" autoplay loop>
        <source src="@/assets/video/main.mp4" type="video/mp4">
    </video>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class VideoSplash extends Vue {}
</script>