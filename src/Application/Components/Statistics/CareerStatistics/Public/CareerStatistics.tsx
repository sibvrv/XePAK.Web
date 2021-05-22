import * as React from 'react';

import {IPlayerStatsState} from "../../../../../Store/Reducers/PlayerStats";
import styles from '../Styles/CareerStatistics.module.css';

/**
 * CareerStatistics Props Interface
 */
export interface ICareerStatisticsProps extends IPlayerStatsState {
}

/**
 * CareerStatistics State Interface
 */
export interface ICareerStatisticsState {
}

const Item = ({caption, value}: { caption: string, value: string | number }) => {
  return <div className={styles.Item}>
    <div className={styles.ItemTitle}>{caption}</div>
    <div className={styles.ItemValue}>{value}</div>
  </div>
}

/**
 * CareerStatistics
 * @class CareerStatistics
 * @extends Component
 */
export class CareerStatistics extends React.Component<ICareerStatisticsProps, ICareerStatisticsState> {
  /**
   * Default Props for CareerStatistics Component
   */
  public static defaultProps: Partial<ICareerStatisticsProps> = {};

  /**
   * CareerStatistics Component Constructor
   * @param {ICareerStatisticsProps} props
   * @param context
   */
  constructor(props: ICareerStatisticsProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render CareerStatistics Component
   */
  public render() {
    const {matchPlayed, wins, losses, timePlayed, kills, deaths, KDR, averageLifetime} = this.props;
    return (
      <div className={styles.Container}>
        <div className={styles.Title}>Career Statistics</div>
        <div className={styles.Content}>
          <Item caption="Match Complete" value={matchPlayed}/>
          <Item caption="Time Played" value={timePlayed}/>
          <Item caption="Win/Loss Ratio" value={wins / (losses || 1)}/>
          <Item caption="Wins" value={wins}/>
          <Item caption="Losses" value={losses}/>
          <Item caption="Kills" value={kills}/>
          <Item caption="Deaths" value={deaths}/>
          <Item caption="Kill Death Ratio" value={KDR}/>
          <Item caption="Average Lifetime" value={averageLifetime}/>
        </div>
      </div>
    )
  }
}
