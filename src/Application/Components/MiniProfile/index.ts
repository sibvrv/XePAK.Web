import { connect } from "react-redux";

import { TRootState } from "../../../Store/Store";

import { MiniProfile } from "./Public/MiniProfile";

export default connect((state: TRootState) => {
  return state.stats;
})(MiniProfile);
