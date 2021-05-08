import * as React from 'react';
import styles from '../Styles/MainMenu.module.css';

/**
 * MainMenu Props Interface
 */
export interface IMainMenuProps {
}

/**
 * MainMenu State Interface
 */
export interface IMainMenuState {
}

/**
 * MainMenu
 * @class MainMenu
 * @extends Component
 */
export class MainMenu extends React.Component<IMainMenuProps, IMainMenuState> {
  /**
   * Default Props for MainMenu Component
   */
  public static defaultProps: Partial<IMainMenuProps> = {};

  /**
   * MainMenu Component Constructor
   * @param {IMainMenuProps} props
   * @param context
   */
  constructor(props: IMainMenuProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render MainMenu Component
   */
  public render() {
    return (
      <div className={styles.Menu}>
        <div className={styles.MenuItem}>Ranking</div>
        <div className={styles.MenuItem}>Season</div>
        <div className={styles.MenuItem}>Statistics</div>
      </div>
    );
  }
}
