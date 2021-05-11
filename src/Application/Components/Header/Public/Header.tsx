import * as React from 'react';
import logo from '../../../../Assets/Logo/XePAK_blue.svg';
import styles from '../Styles/Header.module.css';
import {ROUTE} from '../../../../Constants/Routing';

/**
 * Header Props Interface
 */
export interface IHeaderProps {
}

/**
 * Header State Interface
 */
export interface IHeaderState {
}

/**
 * Header
 * @class Header
 * @extends Component
 */
export class Header extends React.Component<IHeaderProps, IHeaderState> {
  /**
   * Default Props for Header Component
   */
  public static defaultProps: Partial<IHeaderProps> = {};

  /**
   * Header Component Constructor
   * @param {IHeaderProps} props
   * @param context
   */
  constructor(props: IHeaderProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Header Component
   */
  public render() {
    const {children} = this.props;
    return (
      <div className={styles.Header}>
        <div className={styles.Logo}>
          <a href={ROUTE.PAGE_HOME}><img src={logo} alt="XePAK"/></a>
        </div>
        {children}
      </div>
    );
  }
}
