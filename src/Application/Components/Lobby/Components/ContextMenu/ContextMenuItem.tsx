import * as React from "react";

import { noop } from "../../../../../Framework/Common/noop";

import styles from "./Styles/ContextMenu.module.css";

/**
 * ContextMenuItem Props Interface
 */
export interface IContextMenuItemProps {
  onClick: (event: React.MouseEvent) => void;
}

/**
 * ContextMenuItem State Interface
 */
export interface IContextMenuItemState {}

/**
 * ContextMenuItem
 * @class ContextMenuItem
 * @extends Component
 */
export class ContextMenuItem extends React.Component<IContextMenuItemProps, IContextMenuItemState> {
  /**
   * Default Props for ContextMenuItem Component
   */
  public static defaultProps: Partial<IContextMenuItemProps> = {
    onClick: noop,
  };

  /**
   * ContextMenuItem Component Constructor
   * @param {IContextMenuItemProps} props
   * @param context
   */
  constructor(props: IContextMenuItemProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render ContextMenuItem Component
   */
  public render() {
    const { children, onClick } = this.props;
    return (
      <div className={styles.Item} onClick={onClick}>
        {children}
      </div>
    );
  }
}
