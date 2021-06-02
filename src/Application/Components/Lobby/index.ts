import { connect } from "react-redux";
import { withRouter } from "react-router";

import { TRootState } from "../../../Store/Store";

import { Lobby } from "./Public/Lobby";

export default withRouter(
  connect((state: TRootState) => {
    return {
      ...state.auth,
      ...state.lobby,
      status: state.system.status,
    };
  })(Lobby)
);
