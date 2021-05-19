import {connect} from 'react-redux';
import {TRootState} from '../../../Store/Store';
import {Lobby} from './Public/Lobby';

export default connect((state: TRootState) => {
  return state.lobby;
})(Lobby);
