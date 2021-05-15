import * as React from 'react';
import styles from '../Styles/Lobby.module.css';
import {Header} from '../../Header';
import {MainMenu} from '../../MainMenu';
import {Footer} from '../../Footer/Footer';
import {PlayerList} from '../Components/PlayerList/PlayerList';

/**
 * Lobby Props Interface
 */
export interface ILobbyProps {
}

/**
 * Lobby State Interface
 */
export interface ILobbyState {
}

declare let sdNet: any;

const Button = ({onClick, children, id}: { onClick: () => void, id?: string, children: any }) =>
  <div {...(id ? {id} : {})} className={styles.Button} onClick={onClick}>{children}</div>;

/**
 * Lobby
 * @class Lobby
 * @extends Component
 */
export class Lobby extends React.Component<ILobbyProps, ILobbyState> {
  /**
   * Default Props for Lobby Component
   */
  public static defaultProps: Partial<ILobbyProps> = {};

  /**
   * Lobby Component Constructor
   * @param {ILobbyProps} props
   * @param context
   */
  constructor(props: ILobbyProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render Lobby Component
   */
  public render() {
    return (
      <div id="lobby_ui" className={styles.Container}>
        <div className={styles.ContainerInner}>
          <Header variation="secondary">
            <MainMenu variation="secondary"/>
          </Header>

          <div className={styles.GameModeActions}>
            <Button onClick={() => sdNet.OfflineTraining(2)}>Play solo vs AI</Button>
            <Button onClick={() => sdNet.OfflineTraining(1)}>Play with AI vs AI</Button>
            <Button onClick={() => sdNet.OfflineTraining(0)}>Play alone</Button>
            <Button onClick={() => sdNet.QuickPlay(sdNet.MODE_FFA)} id="play_ffa_btn">
              Quick Play FFA <span className={styles.ButtonHighlight}>(2+ players, multiplayer)</span>
            </Button>
            <Button onClick={() => sdNet.QuickPlay(sdNet.MODE_TEAM_VS_TEAM)}
                    id="play_tvt_btn">
              Quick Play TvT <span className={styles.ButtonHighlight}>(2+ players, multiplayer)</span>
            </Button>
            <Button onClick={() => sdNet.QuickPlay(sdNet.MODE_AS_ONE)} id="play_as1_btn">
              Quick Play As One <span className={styles.ButtonHighlight}>(4+ players, multiplayer)</span>
            </Button>
            <div id='status_field' className={styles.StatusField}>status</div>
          </div>

          <div className={styles.Content}>

            <div className={styles.PlayersOnline}>
              <PlayerList name="online_players" title="Players in lobby now"/>
            </div>

            <div className={styles.PlayersGroup}>
              <PlayerList name="group_players" title="Your group"/>
            </div>

            <div className={styles.PlayersGroup}>
              <PlayerList name="enemy_group_players" title="Your opponent group"/>
            </div>

          </div>

          <Footer/>
        </div>


        <div id="floating_user_info_bg" className={styles.FloatingUserInfoContainer} onMouseDown={(event) => {
          // if (event.target === this) {
          //   sdNet.CloseUserMenu();
          // }
        }}>
          <div id="floating_user_info" className={styles.FloatingUserInfo}>
          </div>
        </div>
      </div>
    );
  }
}
