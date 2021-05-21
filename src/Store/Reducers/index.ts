import {combineReducers} from 'redux';
import {PlayerStatsReducer} from './PlayerStats';
import {LobbyReducer} from './LobbyReducer';
import {SystemReducer} from './SystemReducer';
import {AuthReducer} from './AuthReducer';

const rootReducers = {
  auth: AuthReducer,
  stats: PlayerStatsReducer,
  lobby: LobbyReducer,
  system: SystemReducer,
};

export default combineReducers(rootReducers);
