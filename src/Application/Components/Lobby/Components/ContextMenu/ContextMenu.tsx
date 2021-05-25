import * as React from "react";

import styles from "./Styles/ContextMenu.module.css";

/**
 * ContextMenu Props Interface
 */
export interface IContextMenuProps {}

/**
 * ContextMenu State Interface
 */
export interface IContextMenuState {}

/**
 * ContextMenu
 * @class ContextMenu
 * @extends Component
 */
export class ContextMenu extends React.Component<IContextMenuProps, IContextMenuState> {
  /**
   * Default Props for ContextMenu Component
   */
  public static defaultProps: Partial<IContextMenuProps> = {};

  /**
   * ContextMenu Component Constructor
   * @param {IContextMenuProps} props
   * @param context
   */
  constructor(props: IContextMenuProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render ContextMenu Component
   */
  public render() {
    const { children } = this.props;
    return <div className={styles.Context}>{children}</div>;
  }
}
