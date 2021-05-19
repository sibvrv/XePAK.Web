import {handleActions} from 'redux-actions';

/**
 * LobbyReducer Model Interface
 */
export interface ILobbyReducerModel {
}

/**
 * LobbyReducer State Interface
 */
export interface ILobbyReducerState {
  status: string;
}

/**
 * LobbyReducer Initial State Interface
 */
const initialState: ILobbyReducerState = {
  status: ''
};

export const LobbyReducer = handleActions<ILobbyReducerState, ILobbyReducerModel>(
  {},
  initialState,
);
