import * as React from 'react';
import styles from './Styles/PlayerList.module.css';

/**
 * PlayerList Props Interface
 */
export interface IPlayerListProps {
  name: string;
  title: string;
}

/**
 * PlayerList State Interface
 */
export interface IPlayerListState {
}

enum STATUS {
  NONE,
  ONLINE,
  OFFLINE
}

const Item = (
  {icon, title, active, status = STATUS.NONE, badge}: {
    title: string,
    active?: boolean,
    icon?: string,
    status?: STATUS,
    badge?: string | number
  }) =>
  <div className={active ? styles.Active : (status === STATUS.OFFLINE ? styles.Offline : styles.Item)}>
    {status === STATUS.NONE ?
      <div className={styles.Icon}>{icon}</div> :
      <div className={status === STATUS.ONLINE ? styles.StatusOnline : styles.StatusOffline}/>
    }
    <div className={styles.Element}>{title}</div>
    {badge && <div className={styles.Badge}>{badge}</div>}
  </div>;

/**
 * PlayerList
 * @class PlayerList
 * @extends Component
 */
export class PlayerList extends React.Component<IPlayerListProps, IPlayerListState> {
  /**
   * Default Props for PlayerList Component
   */
  public static defaultProps: Partial<IPlayerListProps> = {};

  /**
   * PlayerList Component Constructor
   * @param {IPlayerListProps} props
   * @param context
   */
  constructor(props: IPlayerListProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render PlayerList Component
   */
  public render() {
    const {name, title} = this.props;
    return (
      <>
        <span className={styles.Title}>{title}</span>
        <div id={name} className={styles.Section}>
          <div className={styles.Loading}>
            <div className={styles.LoadingRing}/>
            <div className={styles.LoadingText}>Loading</div>
          </div>
          <Item title="Player 1" icon="#" badge="You"/>
          <Item title="Player 2" icon="#" active/>
          <Item title="Player 3" icon="#"/>
          <Item title="Player 4" status={STATUS.ONLINE}/>
          <Item title="Player 5" status={STATUS.ONLINE} badge={5}/>
          <Item title="Player 6" status={STATUS.ONLINE}/>
          <Item title="Player 7" status={STATUS.ONLINE}/>
          <Item title="Player 8" status={STATUS.OFFLINE}/>
          <Item title="Player 9" status={STATUS.OFFLINE} badge={99}/>
          <Item title="Player 10" status={STATUS.OFFLINE}/>
          <Item title="Player 11" status={STATUS.OFFLINE}/>
          <Item title="Player 12" status={STATUS.OFFLINE}/>
          <Item title="Player 13" status={STATUS.OFFLINE}/>
        </div>
      </>
    );
  }
}
