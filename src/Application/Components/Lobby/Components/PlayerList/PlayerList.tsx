import * as React from "react";

import { noop } from "../../../../../Framework/Common/noop";
import { Loading } from "../../../Common/Loading/Loading";

import styles from "./Styles/PlayerList.module.css";

export enum PLAYER_STATUS {
  NONE,
  ONLINE,
  OFFLINE,
}

export interface IPlayerInfo {
  uid: string;
  title: string;
  active?: boolean;
  icon?: string;
  status?: PLAYER_STATUS;
  badge?: string | number;
  invite?: boolean;
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
export interface IPlayerListState {}

const Item = ({ icon, title, active, status = PLAYER_STATUS.NONE, badge, onClick }: IPlayerInfo & { onClick: (e: React.MouseEvent) => void }) => (
  <div onClick={onClick} className={active ? styles.Active : status === PLAYER_STATUS.OFFLINE ? styles.Offline : styles.Item}>
    {status === PLAYER_STATUS.NONE ? (
      <div className={styles.Icon}>{icon}</div>
    ) : (
      <div className={status === PLAYER_STATUS.ONLINE ? styles.StatusOnline : styles.StatusOffline} />
    )}
    <div className={styles.Element}>{title}</div>
    {badge && <div className={styles.Badge}>{badge}</div>}
  </div>
);

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
    players: [],
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
    const { title, players, onClick, active } = this.props;
    return (
      <>
        <span className={styles.Title}>{title}</span>

        {!players.length && <Loading />}

        <div className={styles.Section}>
          {players.map((player) => (
            <div key={`pl_${player.title}`}>
              <Item onClick={(e) => onClick(e, player.uid)} active={player.uid === active} {...player} />
              {player.invite && (
                <div className={styles.Actions}>
                  <div className={styles.ButtonPrimary}>Accept</div>
                  <div className={styles.ButtonDanger}>Decline</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
  }
}
