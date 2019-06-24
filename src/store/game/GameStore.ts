import { IRootState } from "../store";
import { getStoreBuilder, BareActionContext } from "vuex-typex";
import GameState from "./GameState";
import Maze from "@/models/maze";
import Room from "@/models/room";
import Treasure from "@/models/treasure";
import Threat from "@/models/threat";
import Action from "@/models/action";
import Modal from "@/models/modal";

const initialGameState: GameState = new GameState();

const a = getStoreBuilder<IRootState>().module("game", initialGameState);

// mutations
function commitCurrentMaze(state: GameState, payload: { currentMaze: Maze }) {
    state.currentMaze = payload.currentMaze;
}

function commitCurrentRoom(state: GameState, payload: { currentRoom: Room }) {
    state.currentRoom = payload.currentRoom;
}

function commitRemoveTreasureFromCurrentRoom(state: GameState, payload: { treasure: Treasure }) {
    if (state.currentRoom !== null) {
        const index = state.currentRoom.treasures.findIndex(treasure => treasure.name = payload.treasure.name);
        state.currentRoom.treasures.splice(index, 1);
    }
}

function commitSetPlayerWealth(state: GameState, payload: { wealth: number }) {
    if (state.currentPlayer !== null) {
        state.currentPlayer.playerWealth = payload.wealth;
    }
}

function commitEliminateCurrentThreat(state: GameState, payload: { threat: Threat }) {
    if (state.currentRoom !== null) {
        const index = state.currentRoom.threats.findIndex(threat => threat.name = payload.threat.name)
        state.currentRoom.threats.splice(index, 1);
    }
}

function commitSetCurrentThreat(state: GameState, payload: { threat: Threat | null }) {
    state.currentThreat = payload.threat;
}

function commitUpdateModal(state: GameState, payload: { modal: Modal | null }) {
    state.currentModal = payload.modal;
}

function commitSetInitialMaze(state: GameState, payload: { initialMaze: Maze | null }) {
    state.initialMaze = payload.initialMaze;
}


// action
async function setCurrentMaze(
    context: BareActionContext<GameState, IRootState>,
    payload: { maze: Maze }
) {
    gameModule.commitSetCurrentMaze({ currentMaze: payload.maze });
}

async function setCurrentRoom(
    context: BareActionContext<GameState, IRootState>,
    payload: { room: Room }
) {
    gameModule.commitSetCurrentRoom({ currentRoom: payload.room });
}

async function pickUpTreasure(
    context: BareActionContext<GameState, IRootState>,
    payload: { treasure: Treasure }
) {
    if (context.state.currentPlayer !== null) {
        let currentWealth: number = context.state.currentPlayer.playerWealth;
        gameModule.commitSetPlayerWealth({ wealth: payload.treasure.value + currentWealth });
        gameModule.commitRemoveTreasureFromCurrentRoom({ treasure: payload.treasure });
    }
}

async function eliminateCurrentThreat(
    context: BareActionContext<GameState, IRootState>,
    payload: { action: Action }
): Promise<boolean> {
    if (context.state.currentThreat !== null) {
        let removeThreat: boolean = context.state.currentThreat.isDefeatedBy.name === payload.action.name;
        if (removeThreat) {
            gameModule.commitEliminateCurrentThreat({ threat: context.state.currentThreat });
            gameModule.commitSetCurrentThreat({ threat: null });

            return true;
        } else {

            return false;
        }
    } else {

        return false;
    }
}

async function setInitialMaze(
    context: BareActionContext<GameState, IRootState>,
    payload: { maze: Maze | null }
) {
    gameModule.commitSetInitialMaze({ initialMaze: payload.maze })

}

async function updateModal(
    context: BareActionContext<GameState, IRootState>,
    payload: { modal: Modal | null }
) {
    gameModule.commitUpdateModal({ modal: payload.modal });
}

async function setCurrentThreat(
    context: BareActionContext<GameState, IRootState>,
    payload: { threat: Threat | null }
) {
    gameModule.commitSetCurrentThreat({ threat: payload.threat });
}

// getters
const numberOfRoomsGetter = a.read(
    state => state.currentMaze,
    "numberOfRooms"
);

// state
const stateGetter = a.state();

// exported "game" module interface
const gameModule = {
    // state
    get state() {
        return stateGetter();
    },

    // getters
    get numberOfRooms(): Maze | null {
        return numberOfRoomsGetter();
    },

    // mutations
    commitSetCurrentMaze: a.commit(commitCurrentMaze),
    commitSetCurrentRoom: a.commit(commitCurrentRoom),
    commitRemoveTreasureFromCurrentRoom: a.commit(commitRemoveTreasureFromCurrentRoom),
    commitSetPlayerWealth: a.commit(commitSetPlayerWealth),
    commitEliminateCurrentThreat: a.commit(commitEliminateCurrentThreat),
    commitSetCurrentThreat: a.commit(commitSetCurrentThreat),
    commitUpdateModal: a.commit(commitUpdateModal),
    commitSetInitialMaze: a.commit(commitSetInitialMaze),

    // actions
    dispatchSetCurrentMaze: a.dispatch(setCurrentMaze),
    dispatchSetCurrentRoom: a.dispatch(setCurrentRoom),
    dispatchPickUpTreasure: a.dispatch(pickUpTreasure),
    dispatchEliminateThreat: a.dispatch(eliminateCurrentThreat),
    dispatchSetCurrentThreat: a.dispatch(setCurrentThreat),
    dispatchUpdateModal: a.dispatch(updateModal),
    dispatchSetInitialMaze: a.dispatch(setInitialMaze)


};

export default gameModule;


