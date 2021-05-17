import {combineReducers} from "redux";
import {PlayerStatsReducer} from "./PlayerStats";

const rootReducers = {
  stats: PlayerStatsReducer
}

export default combineReducers(rootReducers);
