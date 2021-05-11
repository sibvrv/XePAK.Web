import * as React from 'react';
import styles from '../Styles/MainMenu.module.css';
import {Link} from 'react-router-dom';
import {ROUTE} from '../../../../Constants/Routing';

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
        <Link to={ROUTE.PAGE_RANKING} className={styles.MenuItem}>Ranking</Link>
        <Link to={ROUTE.PAGE_SEASON} className={styles.MenuItem}>Season</Link>
        <Link to={ROUTE.PAGE_STATISTICS} className={styles.MenuItem}>Statistics</Link>
      </div>
    );
  }
}
