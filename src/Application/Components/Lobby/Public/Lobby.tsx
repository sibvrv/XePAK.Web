import * as React from 'react';
import styles from '../Styles/Lobby.module.css';
import {Header} from '../../Header';
import {MainMenu} from '../../MainMenu';
import {Footer} from '../../Footer/Footer';
import {PlayerList} from '../Components/PlayerList/PlayerList';
import {ILobbyReducerState, LOBBY_ACTIONS} from '../../../../Store/Reducers/LobbyReducer';
import {ContextMenu} from '../Components/ContextMenu/ContextMenu';
import {ContextMenuItem} from '../Components/ContextMenu/ContextMenuItem';
import store from '../../../../Store/Store';
import {passwordGenerator} from '../../../../Framework/Password/PasswordGenerator';

/**
 * Lobby Props Interface
 */
export interface ILobbyProps extends ILobbyReducerState {
}

/**
 * Lobby State Interface
 */
export interface ILobbyState {
  userDialog: { uid: string; x: number; y: number } | false;
  activePlayerUID: string,
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
   * Variables
   */
  hideDialogTimer = 0;

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
    this.state = {
      userDialog: false,
      activePlayerUID: '',
    };
  }

  private clearTimer() {
    if (this.hideDialogTimer) {
      clearTimeout(this.hideDialogTimer);
      this.hideDialogTimer = 0;
    }
  }

  private startTimer() {
    this.clearTimer();

    this.hideDialogTimer = window.setTimeout(() => {
      this.hideDialogs();
      this.hideDialogTimer = 0;
    }, 5000);
  }

  private onUserClick = (e: React.MouseEvent, uid: string) => {
    e.stopPropagation();

    if (e.currentTarget) {
      const pos = e.currentTarget.getBoundingClientRect();
      this.setState({
        activePlayerUID: uid,
        userDialog: {
          uid,
          x: pos.left,
          y: pos.top + pos.height,
        },
      });
      this.startTimer();
    }
  };

  public hideDialogs = () => {
    this.setState({
      userDialog: false,
    });
  };

  componentDidMount() {
    const {uid, pass} = this.props;
    if (!uid || !pass) {
      store.dispatch({
        type: 'FETCH',
        payload: {
          action: LOBBY_ACTIONS.QUICK_REGISTER,
          params: {
            request: 'quick_register',
            pass: passwordGenerator()
          }
        },
      });
    }
  }

  public componentWillUnmount() {
    this.clearTimer();
  }

  /**
   * Render Lobby Component
   */
  public render() {
    const {status, playersOnline, playersGroup, playersEnemyGroup} = this.props;
    const {userDialog, activePlayerUID} = this.state;

    const myUid = '1';

    return (
      <div id="lobby_ui" className={styles.Container} onClick={this.hideDialogs}>
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
            <div id='status_field' className={styles.StatusField}>{status}</div>
          </div>

          <div className={styles.Content}>

            <div className={styles.PlayersOnline}>
              <PlayerList title="Players in lobby now"
                          active={activePlayerUID}
                          onClick={this.onUserClick}
                          players={playersOnline}/>
            </div>

            {playersGroup.length > 0 &&
            <div className={styles.PlayersGroup}>
              <PlayerList title="Your group"
                          onClick={this.onUserClick}
                          players={playersGroup}
              />
            </div>}

            {playersEnemyGroup.length > 0 &&
            <div className={styles.PlayersGroup}>
              <PlayerList title="Your opponent group"
                          onClick={this.onUserClick}
                          players={playersEnemyGroup}
              />
            </div>}

          </div>

          <Footer/>
        </div>


        {userDialog && <div className={styles.FloatingUserInfo}
                            onClick={(e) => e.stopPropagation()}
                            onMouseEnter={() => this.clearTimer()}
                            onMouseLeave={() => this.startTimer()}
                            style={{left: userDialog.x, top: userDialog.y}}>
          <ContextMenu>
            {userDialog.uid !== myUid &&
            <>
              <ContextMenuItem>Invite to my teammate group</ContextMenuItem>
              <ContextMenuItem>Invite as opponent group leader</ContextMenuItem>
            </>}

            {userDialog.uid === myUid &&
            <>
              <ContextMenuItem>Reset my teammate group</ContextMenuItem>
              <ContextMenuItem>Reset opponent group</ContextMenuItem>
            </>}
          </ContextMenu>
        </div>}
      </div>
    );
  }

}
