import * as React from 'react';
import {BaseLayout} from '../Layouts/BaseLayout';
import CareerStatistics from "../Components/Statistics/CareerStatistics";

/**
 * Statistics Props Interface
 */
export interface IStatisticsProps {
}

/**
 * Statistics State Interface
 */
export interface IStatisticsState {
}

/**
 * Statistics
 * @class Statistics
 * @extends Component
 */
export class Statistics extends React.Component<IStatisticsProps, IStatisticsState> {
  /**
   * Default Props for Statistics Component
   */
  public static defaultProps: Partial<IStatisticsProps> = {};

  /**
   * Statistics Component Constructor
   * @param {IStatisticsProps} props
   * @param context
   */
  constructor(props: IStatisticsProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Statistics Component
   */
  public render() {
    return (
      <BaseLayout>
        <CareerStatistics/>
      </BaseLayout>
    );
  }
}
