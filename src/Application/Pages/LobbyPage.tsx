import * as React from "react";

import Lobby from "../Components/Lobby";

/**
 * LobbyPage Props Interface
 */
export interface ILobbyPageProps {}

/**
 * LobbyPage State Interface
 */
export interface ILobbyPageState {}

/**
 * LobbyPage
 * @class LobbyPage
 * @extends Component
 */
export class LobbyPage extends React.Component<ILobbyPageProps, ILobbyPageState> {
  /**
   * Default Props for LobbyPage Component
   */
  public static defaultProps: Partial<ILobbyPageProps> = {};

  /**
   * LobbyPage Component Constructor
   * @param {ILobbyPageProps} props
   * @param context
   */
  constructor(props: ILobbyPageProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render LobbyPage Component
   */
  public render() {
    return <Lobby />;
  }
}
