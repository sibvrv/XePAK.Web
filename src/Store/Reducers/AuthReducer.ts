import {handleActions} from 'redux-actions';

/**
 * AuthReducer Model Interface
 */
export interface IAuthReducerModel {
}

/**
 * AuthReducer State Interface
 */
export interface IAuthReducerState {
}

/**
 * AuthReducer Initial State Interface
 */
const initialState: IAuthReducerState = {};

/**
 * AuthReducer Reducer
 */
export const AuthReducerReducer = handleActions<IAuthReducerState, IAuthReducerModel>(
  {},
  initialState
);
