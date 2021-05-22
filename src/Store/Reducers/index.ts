import { combineReducers } from "redux";

import { AuthReducer } from "./AuthReducer";
import { LobbyReducer } from "./LobbyReducer";
import { PlayerStatsReducer } from "./PlayerStats";
import { SystemReducer } from "./SystemReducer";

const rootReducers = {
  auth: AuthReducer,
  stats: PlayerStatsReducer,
  lobby: LobbyReducer,
  system: SystemReducer,
};

export default combineReducers(rootReducers);
