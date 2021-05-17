import {handleActions} from 'redux-actions';

/**
 * PlayerStats Model Interface
 */
export interface IPlayerStatsModel {

}

/**
 * PlayerStats State Interface
 */
export interface IPlayerStatsState {
  // Career statistics
  matchPlayed: number;
  timePlayed: number;
  winRate: number; // Win/Loss Ratio
  kills: number;
  averageLifetime: number
  KDR: number; // Kill Death Ratio

  weapon: Record<string, { accuracy: number; hits: number; kills: number; damage: number; }>;
}

/**
 * PlayerStats Initial State Interface
 */
const initialState: IPlayerStatsState = {
  matchPlayed: 0,
  timePlayed: 0,
  winRate: 0,
  kills: 0,
  averageLifetime: 0,
  KDR: 0,

  weapon: {},
};


export const PlayerStatsReducer = handleActions<IPlayerStatsState, IPlayerStatsModel>(
  {},
  initialState
);
