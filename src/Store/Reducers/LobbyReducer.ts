import { handleActions } from "redux-actions";

import { IPlayerInfo, PLAYER_STATUS } from "../../Application/Components/Lobby/Components/PlayerList/PlayerList";

export enum LOBBY_ACTION {
  PLAYERS_ONLINE = "PLAYERS_ONLINE",
  PLAYERS_GROUP = "PLAYERS_GROUP",
  PLAYERS_ENEMY_GROUP = "PLAYERS_ENEMY_GROUP",
  INVITE_TO_GROUP = "INVITE_TO_GROUP",
  ACCEPT_GROUP_INVITE = "ACCEPT_GROUP_INVITE",
}

/**
 * LobbyReducer Model Interface
 */
export interface ILobbyReducerModel {
  response: { status: string; parts: string[] };
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

export const LobbyReducer = handleActions<ILobbyReducerState, ILobbyReducerModel>(
  {
    [LOBBY_ACTION.ACCEPT_GROUP_INVITE]: (state, action) => {
      const {
        response: { status },
        params: { from_uid },
      } = action.payload;
      if (status !== "done") {
        return state;
      }

      // todo remove only invite by self uid
      return {
        ...state,
        playersGroup: state.playersGroup.map((it) => (it.uid === from_uid ? { ...it, invite: false } : it)),
        playersEnemyGroup: state.playersEnemyGroup.map((it) => (it.uid === from_uid ? { ...it, invite: false } : it)),
      };
    },
    [LOBBY_ACTION.PLAYERS_ONLINE]: (state, action) => {
      const { parts, status } = action.payload.response;
      if (status !== "done") {
        return state;
      }

      return {
        ...state,
        playersOnline: parts[0]
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
      const { parts, status } = action.payload.response;
      if (status !== "done") {
        return state;
      }

      return {
        ...state,
        playersGroup: parts[0]
          .split(",")
          .filter(Boolean)
          .map((uid) => ({
            invite: uid.indexOf(">") === 0,
            uid: uid.replace(/^>/, ""),
            title: `Player #${uid.replace(/^>/, "")}`,
            status: PLAYER_STATUS.ONLINE,
          })),
      };
    },
    [LOBBY_ACTION.PLAYERS_ENEMY_GROUP]: (state, action) => {
      const { parts, status } = action.payload.response;
      if (status !== "done") {
        return state;
      }

      return {
        ...state,
        playersEnemyGroup: parts[0]
          .split(",")
          .filter(Boolean)
          .map((uid) => ({
            invite: uid.indexOf(">") === 0,
            uid: uid.replace(/^>/, ""),
            title: `Player #${uid.replace(/^>/, "")}`,
            status: PLAYER_STATUS.ONLINE,
          })),
      };
    },
  },
  initialState
);
