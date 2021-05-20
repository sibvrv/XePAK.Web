import * as React from 'react';
import styles from './Styles/ContextMenu.module.css';

/**
 * ContextMenuItem Props Interface
 */
export interface IContextMenuItemProps {
}

/**
 * ContextMenuItem State Interface
 */
export interface IContextMenuItemState {
}

/**
 * ContextMenuItem
 * @class ContextMenuItem
 * @extends Component
 */
export class ContextMenuItem extends React.Component<IContextMenuItemProps, IContextMenuItemState> {
  /**
   * Default Props for ContextMenuItem Component
   */
  public static defaultProps: Partial<IContextMenuItemProps> = {};

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
    const {children} = this.props;
    return (
      <div className={styles.Item}>
        {children}
      </div>
    )
  }
}
