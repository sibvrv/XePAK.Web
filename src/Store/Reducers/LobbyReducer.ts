import { handleActions } from "redux-actions";

import {
  IPlayerInfo,
  PLAYER_STATUS,
} from "../../Application/Components/Lobby/Components/PlayerList/PlayerList";

export enum LOBBY_ACTION {
  PLAYERS_ONLINE = "PLAYERS_ONLINE",
  PLAYERS_GROUP = "PLAYERS_GROUP",
  PLAYERS_ENEMY_GROUP = "PLAYERS_ENEMY_GROUP",
  INVITE_TO_GROUP = "INVITE_TO_GROUP",
}

/**
 * LobbyReducer Model Interface
 */
export interface ILobbyReducerModel {
  response: string;
  params: any;
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
  playersOnline: [],
  playersGroup: [],
  playersEnemyGroup: [],
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
        playersOnline: parts[1]
          .split(",")
          .filter(Boolean)
          .map((uid) => ({
            uid,
            title: `Player #${uid}`,
            status: PLAYER_STATUS.ONLINE,
            badge: uid === action.payload.params.uid ? "You" : "",
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
        playersGroup: parts[1]
          .split(",")
          .filter(Boolean)
          .map((uid) => ({
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
        playersEnemyGroup: parts[1]
          .split(",")
          .filter(Boolean)
          .map((uid) => ({
            uid,
            title: `Player #${uid}`,
            status: PLAYER_STATUS.ONLINE,
          })),
      };
    },
  },
  initialState
);
