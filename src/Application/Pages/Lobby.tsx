import * as React from 'react';

/**
 * Lobby Props Interface
 */
export interface ILobbyProps {
}

/**
 * Lobby State Interface
 */
export interface ILobbyState {
}

/**
 * Lobby
 * @class Lobby
 * @extends Component
 */
export class Lobby extends React.Component<ILobbyProps, ILobbyState> {
  /**
   * Default Props for Lobby Component
   */
  public static defaultProps: Partial<ILobbyProps> = {};

  /**
   * Lobby Component Constructor
   * @param {ILobbyProps} props
   * @param context
   */
  constructor(props: ILobbyProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Lobby Component
   */
  public render() {
    const {children} = this.props;
    return (
      <>
        {children}
      </>
    );
  }
}
