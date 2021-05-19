import {combineReducers} from "redux";
import {PlayerStatsReducer} from "./PlayerStats";
import {LobbyReducer} from './LobbyReducer';

const rootReducers = {
  stats: PlayerStatsReducer,
  lobby: LobbyReducer,
}

export default combineReducers(rootReducers);
