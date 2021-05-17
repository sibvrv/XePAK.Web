import {connect} from "react-redux";
import {TRootState} from "../../../../Store/Store";
import {CareerStatistics} from "./Public/CareerStatistics";

export default connect((state: TRootState) => {
  return state.stats;
})(CareerStatistics);
