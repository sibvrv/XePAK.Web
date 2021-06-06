import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";

import { ROUTE } from "../../Constants/Routing";
import App from "../App";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import { Play } from "../Pages/Play";

export const _Home = () => <Home />;
export const _About = () => <About />;
export const _Play = () => <Play />;

interface IPageLayoutProps {}

const stories: Record<string, Array<{ name: string; route: string; params?: Partial<IPageLayoutProps> }>> = {
  "Pages / Common": [
    { name: "Homepage", route: ROUTE.PAGE_HOME, params: { sidebarActive: true } },
    { name: "About", route: ROUTE.PAGE_ABOUT },
  ],

  // 'Pages / Authentication': [
  //   {name: 'Sign In', route: ROUTE.PAGE_SIGN_IN},
  //   {name: 'Sign Up', route: ROUTE.PAGE_SIGN_UP},
  // ],

  "Pages / Lobby": [{ name: "Play", route: ROUTE.PAGE_LOBBY }],
};

Object.keys(stories).forEach((storyName) => {
  const story = storiesOf(storyName, module);

  stories[storyName].forEach((item) => {
    story.add(item.name, () => (
      <MemoryRouter initialEntries={[{ pathname: item.route }]} initialIndex={0}>
        <App />
      </MemoryRouter>
    ));
  });
});
