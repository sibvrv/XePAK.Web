import {connect} from "react-redux";
import {MiniProfile} from './Public/MiniProfile';
import {TRootState} from "../../../Store/Store";

export default connect((state: TRootState) => {
  return state.stats;
})(MiniProfile);
