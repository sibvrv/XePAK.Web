import * as React from "react";

import { BaseLayout } from "../Layouts/BaseLayout";

/**
 * Ranking Props Interface
 */
export interface IRankingProps {}

/**
 * Ranking State Interface
 */
export interface IRankingState {}

/**
 * Ranking
 * @class Ranking
 * @extends Component
 */
export class Ranking extends React.Component<IRankingProps, IRankingState> {
  /**
   * Default Props for Ranking Component
   */
  public static defaultProps: Partial<IRankingProps> = {};

  /**
   * Ranking Component Constructor
   * @param {IRankingProps} props
   * @param context
   */
  constructor(props: IRankingProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Ranking Component
   */
  public render() {
    const { children } = this.props;
    return <BaseLayout>{children}</BaseLayout>;
  }
}
