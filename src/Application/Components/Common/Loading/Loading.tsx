import * as React from 'react';
import styles from './Styles/Loading.module.css';

/**
 * Loading Props Interface
 */
export interface ILoadingProps {
}

/**
 * Loading State Interface
 */
export interface ILoadingState {
}

/**
 * Loading
 * @class Loading
 * @extends Component
 */
export class Loading extends React.Component<ILoadingProps, ILoadingState> {
  /**
   * Default Props for Loading Component
   */
  public static defaultProps: Partial<ILoadingProps> = {};

  /**
   * Loading Component Constructor
   * @param {ILoadingProps} props
   * @param context
   */
  constructor(props: ILoadingProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Loading Component
   */
  public render() {
    return (
      <div className={styles.Loading}>
        <div className={styles.LoadingRing}/>
        <div className={styles.LoadingText}>Loading</div>
      </div>
    )
  }
}
