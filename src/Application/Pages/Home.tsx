import * as React from 'react';
import {Header} from '../Components/Header';
import {MainMenu} from '../Components/MainMenu/Public/MainMenu';
import {MiniProfile} from '../Components/MiniProfile/Public/MiniProfile';

/**
 * Home Props Interface
 */
export interface IHomeProps {
}

/**
 * Home State Interface
 */
export interface IHomeState {
}

/**
 * Home
 * @class Home
 * @extends Component
 */
export class Home extends React.Component<IHomeProps, IHomeState> {
  /**
   * Default Props for Home Component
   */
  public static defaultProps: Partial<IHomeProps> = {};

  /**
   * Home Component Constructor
   * @param {IHomeProps} props
   * @param context
   */
  constructor(props: IHomeProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Home Component
   */
  public render() {
    return (
      <>
        <div className="Content">
          <Header>
            <MainMenu/>
          </Header>

          <div className="PromotionalPackage">
            <div className="Slogan">
              Become a Pro <strong>XePAK</strong> Player
            </div>

            <div>
              <div className="AreYouReady">
                Are you ready ?
              </div>
              <a href="/play/" className="PlayNow">Play Now</a>
            </div>
          </div>
          <MiniProfile/>
        </div>
      </>
    );
  }
}
