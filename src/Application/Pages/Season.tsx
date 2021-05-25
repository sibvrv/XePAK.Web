import * as React from "react";

import { BaseLayout } from "../Layouts/BaseLayout";

/**
 * Season Props Interface
 */
export interface ISeasonProps {}

/**
 * Season State Interface
 */
export interface ISeasonState {}

/**
 * Season
 * @class Season
 * @extends Component
 */
export class Season extends React.Component<ISeasonProps, ISeasonState> {
  /**
   * Default Props for Season Component
   */
  public static defaultProps: Partial<ISeasonProps> = {};

  /**
   * Season Component Constructor
   * @param {ISeasonProps} props
   * @param context
   */
  constructor(props: ISeasonProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Season Component
   */
  public render() {
    const { children } = this.props;
    return <BaseLayout>{children}</BaseLayout>;
  }
}
