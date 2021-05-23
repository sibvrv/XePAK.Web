import { handleActions } from "redux-actions";

import {
  IPlayerInfo,
  PLAYER_STATUS,
} from "../../Application/Components/Lobby/Components/PlayerList/PlayerList";

export enum LOBBY_ACTION {
  PLAYERS_ONLINE = "PLAYERS_ONLINE",
  PLAYERS_GROUP = "PLAYERS_GROUP",
  PLAYERS_ENEMY_GROUP = "PLAYERS_ENEMY_GROUP",
}

/**
 * LobbyReducer Model Interface
 */
export interface ILobbyReducerModel {
  response: string;
}

/**
 * LobbyReducer State Interface
 */
export interface ILobbyReducerState {
  playersOnline: IPlayerInfo[];
  playersGroup: IPlayerInfo[];
  playersEnemyGroup: IPlayerInfo[];
}

/**
 * LobbyReducer Initial State Interface
 */
const initialState: ILobbyReducerState = {
  playersOnline: [
    { uid: "1", title: "Player 1", icon: "#", badge: "You" },
    { uid: "2", title: "Player 2", icon: "#" },
    { uid: "3", title: "Player 3", icon: "#" },
    { uid: "4", title: "Player 4", status: PLAYER_STATUS.ONLINE },
    { uid: "5", title: "Player 5", status: PLAYER_STATUS.ONLINE, badge: 5 },
    { uid: "6", title: "Player 6", status: PLAYER_STATUS.ONLINE },
    { uid: "7", title: "Player 7", status: PLAYER_STATUS.ONLINE },
    { uid: "8", title: "Player 8", status: PLAYER_STATUS.OFFLINE },
    { uid: "9", title: "Player 9", status: PLAYER_STATUS.OFFLINE, badge: 99 },
    { uid: "10", title: "Player 10", status: PLAYER_STATUS.OFFLINE },
    { uid: "11", title: "Player 11", status: PLAYER_STATUS.OFFLINE },
    { uid: "12", title: "Player 12", status: PLAYER_STATUS.OFFLINE },
    { uid: "13", title: "Player 13", status: PLAYER_STATUS.OFFLINE },
  ],
  playersGroup: [
    { uid: "6", title: "Player 6", status: PLAYER_STATUS.ONLINE },
    { uid: "7", title: "Player 7", status: PLAYER_STATUS.ONLINE },
  ],
  playersEnemyGroup: [
    { uid: "4", title: "Player 4", status: PLAYER_STATUS.ONLINE },
    { uid: "5", title: "Player 5", status: PLAYER_STATUS.ONLINE },
    { uid: "6", title: "Player 6", status: PLAYER_STATUS.ONLINE },
  ],
};

export const LobbyReducer = handleActions<
  ILobbyReducerState,
  ILobbyReducerModel
>(
  {
    [LOBBY_ACTION.PLAYERS_ONLINE]: (state, action) => {
      const parts = action.payload.response.split("|");
      if (parts[0] !== "done") {
        return state;
      }

      return {
        ...state,
        playersOnline: parts[1].split(",").filter(Boolean).map((uid) => ({
          uid,
          title: `Player #${uid}`,
          status: PLAYER_STATUS.ONLINE,
        })),
      };
    },
    [LOBBY_ACTION.PLAYERS_GROUP]: (state, action) => {
      const parts = action.payload.response.split("|");
      if (parts[0] !== "done") {
        return state;
      }

      return {
        ...state,
        playersGroup: parts[1].split(",").filter(Boolean).map((uid) => ({
          uid,
          title: `Player #${uid}`,
          status: PLAYER_STATUS.ONLINE,
        })),
      };
    },
    [LOBBY_ACTION.PLAYERS_ENEMY_GROUP]: (state, action) => {
      const parts = action.payload.response.split("|");
      if (parts[0] !== "done") {
        return state;
      }

      return {
        ...state,
        playersEnemyGroup: parts[1].split(",").filter(Boolean).map((uid) => ({
          uid,
          title: `Player #${uid}`,
          status: PLAYER_STATUS.ONLINE,
        })),
      };
    },
  },
  initialState
);
