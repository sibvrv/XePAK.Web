import * as React from 'react';
import styles from '../Styles/MiniProfile.module.css';

/**
 * MiniProfile Props Interface
 */
export interface IMiniProfileProps {
}

/**
 * MiniProfile State Interface
 */
export interface IMiniProfileState {
}

/**
 * MiniProfile
 * @class MiniProfile
 * @extends Component
 */
export class MiniProfile extends React.Component<IMiniProfileProps, IMiniProfileState> {
  /**
   * Default Props for MiniProfile Component
   */
  public static defaultProps: Partial<IMiniProfileProps> = {};

  /**
   * MiniProfile Component Constructor
   * @param {IMiniProfileProps} props
   * @param context
   */
  constructor(props: IMiniProfileProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render MiniProfile Component
   */
  public render() {
    return (
      <div className={styles.PlayerMiniProfile}>
        <div className={styles.MostPowerfulWeapon}>
          Most powerful weapon
        </div>
        <div className={styles.PlayerStats}>
          <div className={styles.StatsBlock}>
            <div className={styles.StatsCounter}>95%</div>
            <div className={styles.StatsDescription}>Win Rate</div>
          </div>
          <div className={styles.StatsBlock}>
            <div className={styles.StatsCounter}>32134</div>
            <div className={styles.StatsDescription}>Match Played</div>
          </div>
        </div>
      </div>
    );
  }
}
