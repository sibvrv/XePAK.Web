import {handleActions} from 'redux-actions';

/**
 * SystemReducer Model Interface
 */
export interface ISystemReducerModel {

}

/**
 * SystemReducer State Interface
 */
export interface ISystemReducerState {
  status: string;
}

/**
 * SystemReducer Initial State Interface
 */
const initialState: ISystemReducerState = {
  status: ''
};

/**
 * System Reducer
 */
export const SystemReducer = handleActions<ISystemReducerState, ISystemReducerModel>(
  {},
  initialState,
);
