import * as React from 'react';
import styles from './Styles/PlayerList.module.css';
import {Loading} from "../../../Common/Loading/Loading";
import {noop} from "../../../../../Framework/Common/noop";

export enum PLAYER_STATUS {
  NONE,
  ONLINE,
  OFFLINE
}

export interface IPlayerInfo {
  uid: string;
  title: string;
  active?: boolean;
  icon?: string;
  status?: PLAYER_STATUS;
  badge?: string | number;
}

/**
 * PlayerList Props Interface
 */
export interface IPlayerListProps {
  title: string;
  onClick: (e: React.MouseEvent, uid: string) => void;
  players: IPlayerInfo[];
  active?: string;
}

/**
 * PlayerList State Interface
 */
export interface IPlayerListState {
}

const Item = (
  {
    uid,
    icon,
    title,
    active,
    status = PLAYER_STATUS.NONE,
    badge,
    onClick
  }: IPlayerInfo & { onClick: (e: React.MouseEvent, uid: string) => void }) =>
  <div className={active ? styles.Active : (status === PLAYER_STATUS.OFFLINE ? styles.Offline : styles.Item)}
       onClick={(e) => onClick(e, uid)}>
    {status === PLAYER_STATUS.NONE ?
      <div className={styles.Icon}>{icon}</div> :
      <div className={status === PLAYER_STATUS.ONLINE ? styles.StatusOnline : styles.StatusOffline}/>
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
  public static defaultProps: Partial<IPlayerListProps> = {
    onClick: noop,
    players: []
  };

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
    const {title, players, onClick, active} = this.props;
    return (
      <>
        <span className={styles.Title}>{title}</span>

        <Loading/>

        <div className={styles.Section}>
          {players.map(player =>
            <Item key={`pl_${player.title}`}
                  onClick={onClick}
                  active={player.uid === active}
                  {...player}
            />)}
        </div>
      </>
    );
  }

}
