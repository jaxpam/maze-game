<template>
    <div v-show="toggleActionButton()">
        <button>{{ }}</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class GameInformation extends Vue {
    private showActions = false;

    private toggleActionButton() {
        this.showActions = !this.showActions;
    }
}
</script>