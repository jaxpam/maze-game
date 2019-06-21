import { IRootState } from "../store";
import { getStoreBuilder, BareActionContext } from "vuex-typex";
import GameState from "./GameState";
import Maze from "@/models/maze";
import Room from "@/models/room";
import Treasure from '@/models/treasure';
import Threat from '@/models/threat';

const initialGameState: GameState = new GameState();

const a = getStoreBuilder<IRootState>().module("game", initialGameState);

// mutations
function commitCurrentMaze(state: GameState, payload: { currentMaze: Maze }) {
    if (state.currentMaze !== null) {
        state.currentMaze = payload.currentMaze;
    }
}

function commitCurrentRoom(state: GameState, payload: { currentRoom: Room }) {
    if (state.currentRoom !== null) {
        state.currentRoom = payload.currentRoom;
    }
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
        let currentWealth = context.state.currentPlayer.playerWealth;
        gameModule.commitSetPlayerWealth({ wealth: payload.treasure.value + currentWealth });
        gameModule.commitRemoveTreasureFromCurrentRoom({ treasure: payload.treasure });
    }
}

async function eliminateCurrentThreat(
    context: BareActionContext<GameState, IRootState>,
    payload: { threat: Threat }
) {
    if (context.state.currentThreat !== null) {
        let removeThreat = context.state.currentThreat.isDefeatedBy.name;
        gameModule.commitEliminateCurrentThreat({ threat: payload.threat })
    }
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

    // actions
    dispatchSetCurrentMaze: a.dispatch(setCurrentMaze),
    dispatchSetCurrentRoom: a.dispatch(setCurrentRoom),
    dispatchPickUpTreasure: a.dispatch(pickUpTreasure)

};

export default gameModule;


