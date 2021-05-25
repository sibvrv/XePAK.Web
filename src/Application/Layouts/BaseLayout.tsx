import * as React from "react";

import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header";
import { MainMenu } from "../Components/MainMenu";

import styles from "./Styles/BaseLayout.module.css";

/**
 * BaseLayout Props Interface
 */
export interface IBaseLayoutProps {}

/**
 * BaseLayout State Interface
 */
export interface IBaseLayoutState {}

/**
 * BaseLayout
 * @class BaseLayout
 * @extends Component
 */
export class BaseLayout extends React.Component<IBaseLayoutProps, IBaseLayoutState> {
  /**
   * Default Props for BaseLayout Component
   */
  public static defaultProps: Partial<IBaseLayoutProps> = {};

  /**
   * BaseLayout Component Constructor
   * @param {IBaseLayoutProps} props
   * @param context
   */
  constructor(props: IBaseLayoutProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render BaseLayout Component
   */
  public render() {
    const { children } = this.props;
    return (
      <div className={styles.Layout}>
        <Header>
          <MainMenu />
        </Header>
        <div className={styles.Content}>{children}</div>
        <Footer />
      </div>
    );
  }
}
