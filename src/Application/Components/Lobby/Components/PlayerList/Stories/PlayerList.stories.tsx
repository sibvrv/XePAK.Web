import React from "react";

import { PLAYER_STATUS, PlayerList } from "../PlayerList";

export default {
  title: "Components / Player List",
};

export const _BasicPlayersList = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#1a1c1f",
      backgroundImage: "radial-gradient( ellipse at 33% 10%, #162e46 0%, transparent 75% )",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    }}
  >
    <PlayerList
      title="Players List Title"
      players={[
        { badge: "Text", invite: true, title: "This is my player", uid: "1", status: PLAYER_STATUS.ONLINE },
        { badge: "Text", title: "Next Player", uid: "2", status: PLAYER_STATUS.ONLINE },
        { badge: "Text", title: "This is my player", uid: "3", status: PLAYER_STATUS.ONLINE },
      ]}
    />
  </div>
);
