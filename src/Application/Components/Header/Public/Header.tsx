import * as React from 'react';
import logoPrimary from '../../../../Assets/Logo/XePAK.svg';
import logoSecondary from '../../../../Assets/Logo/XEPAK_secondary.svg';
import logoDefault from '../../../../Assets/Logo/XePAK_default.svg';
import styles from '../Styles/Header.module.css';
import {ROUTE} from '../../../../Constants/Routing';
import {Link} from 'react-router-dom';

/**
 * Header Props Interface
 */
export interface IHeaderProps {
  variation: 'default' | 'primary' | 'secondary';
}

/**
 * Header State Interface
 */
export interface IHeaderState {
}

const logoSet = {
  default: logoDefault,
  primary: logoPrimary,
  secondary: logoSecondary,
};

/**
 * Header
 * @class Header
 * @extends Component
 */
export class Header extends React.Component<IHeaderProps, IHeaderState> {
  /**
   * Default Props for Header Component
   */
  public static defaultProps: Partial<IHeaderProps> = {
    variation: 'default',
  };

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
    const {children, variation} = this.props;
    return (
      <div className={styles.Header}>
        <div className={styles.Logo}>
          <Link to={ROUTE.PAGE_HOME}>
            <img src={logoSet[variation]} alt="XEPAK"/>
          </Link>
        </div>
        {children}
      </div>
    );
  }
}
