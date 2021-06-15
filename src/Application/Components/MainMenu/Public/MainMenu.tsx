import * as React from "react";
import { Link } from "react-router-dom";

import { ROUTE } from "../../../../Constants/Routing";
import styles from "../Styles/MainMenu.module.css";

/**
 * MainMenu Props Interface
 */
export interface IMainMenuProps {
  variation: "primary" | "secondary";
}

/**
 * MainMenu State Interface
 */
export interface IMainMenuState {}

const stylesMap = {
  primary: styles.Primary,
  secondary: styles.Secondary,
};

/**
 * MainMenu
 * @class MainMenu
 * @extends Component
 */
export class MainMenu extends React.Component<IMainMenuProps, IMainMenuState> {
  /**
   * Default Props for MainMenu Component
   */
  public static defaultProps: Partial<IMainMenuProps> = {
    variation: "primary",
  };

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
    const { variation } = this.props;
    return (
      <div className={stylesMap[variation]}>
        <Link to={ROUTE.PAGE_LOBBY} className={styles.MenuItem}>
          Lobby
        </Link>
        <Link to={ROUTE.PAGE_RANKING} className={styles.MenuItem}>
          Ranking
        </Link>
        <Link to={ROUTE.PAGE_SEASON} className={styles.MenuItem}>
          Season
        </Link>
        <Link to={ROUTE.PAGE_STATISTICS} className={styles.MenuItem}>
          Statistics
        </Link>
        <Link to={ROUTE.PAGE_ABOUT} className={styles.MenuItem}>
          About
        </Link>
      </div>
    );
  }
}
