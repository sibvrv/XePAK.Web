import * as React from 'react';
import Lobby from '../Components/Lobby';

/**
 * Play Props Interface
 */
export interface IPlayProps {
}

/**
 * Play State Interface
 */
export interface IPlayState {
}

/**
 * Play
 * @class Play
 * @extends Component
 */
export class Play extends React.Component<IPlayProps, IPlayState> {
  /**
   * Default Props for Play Component
   */
  public static defaultProps: Partial<IPlayProps> = {};

  /**
   * Play Component Constructor
   * @param {IPlayProps} props
   * @param context
   */
  constructor(props: IPlayProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Play Component
   */
  public render() {
    return (
      <>
        <Lobby/>
      </>
    );
  }
}
