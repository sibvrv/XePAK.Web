import * as React from 'react';
import styles from './Styles/Footer.module.css';

/**
 * Footer Props Interface
 */
export interface IFooterProps {
}

/**
 * Footer State Interface
 */
export interface IFooterState {
}

/**
 * Footer
 * @class Footer
 * @extends Component
 */
export class Footer extends React.Component<IFooterProps, IFooterState> {
  /**
   * Default Props for Footer Component
   */
  public static defaultProps: Partial<IFooterProps> = {};

  /**
   * Footer Component Constructor
   * @param {IFooterProps} props
   * @param context
   */
  constructor(props: IFooterProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Footer Component
   */
  public render() {
    const {children} = this.props;
    return (
      <footer className={styles.Footer}>
        2021 &copy; <a href="https://www.sibvrv.com/">SibVRV</a>

        {children}
      </footer>
    );
  }
}
