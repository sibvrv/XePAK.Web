import * as React from "react";
import { Route } from "react-router-dom";

import { ROUTE } from "../../Constants/Routing";

import { LobbyPage } from "./LobbyPage";
import { Play } from "./Play";

/**
 * GamePage Props Interface
 */
export interface IGamePageProps {}

/**
 * GamePage State Interface
 */
export interface IGamePageState {}

/**
 * GamePage
 * @class GamePage
 * @extends Component
 */
export class GamePage extends React.Component<IGamePageProps, IGamePageState> {
  /**
   * Default Props for GamePage Component
   */
  public static defaultProps: Partial<IGamePageProps> = {};

  /**
   * GamePage Component Constructor
   * @param {IGamePageProps} props
   * @param context
   */
  constructor(props: IGamePageProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render GamePage Component
   */
  public render() {
    return (
      <>
        <Route exact path={ROUTE.PAGE_PLAY} component={Play} />
        <Route exact path={ROUTE.PAGE_LOBBY} component={LobbyPage} />
      </>
    );
  }
}
