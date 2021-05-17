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
  wins: number;
  losses: number;
  kills: number;
  deaths: number;
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
  wins: 0,
  losses: 0,
  kills: 0,
  deaths: 0,
  averageLifetime: 0,
  KDR: 0,

  weapon: {},
};


export const PlayerStatsReducer = handleActions<IPlayerStatsState, IPlayerStatsModel>(
  {},
  initialState
);
