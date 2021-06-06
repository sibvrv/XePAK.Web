import * as React from "react";
import type { RouteComponentProps } from "react-router";

import { IAuthReducerState } from "../../../../Store/Reducers/AuthReducer";
import { ILobbyReducerState, LOBBY_ACTION } from "../../../../Store/Reducers/LobbyReducer";
import { ISystemReducerState } from "../../../../Store/Reducers/SystemReducer";
import store from "../../../../Store/Store";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header";
import { MainMenu } from "../../MainMenu";
import { ContextMenu } from "../Components/ContextMenu/ContextMenu";
import { ContextMenuItem } from "../Components/ContextMenu/ContextMenuItem";
import { LoadingOverlay } from "../Components/LoadingOverlay/LoadingOverlay";
import { PlayerList } from "../Components/PlayerList/PlayerList";
import styles from "../Styles/Lobby.module.css";

export enum GAME_MODE {
  MODE_PRACTICE_VS_AI,
  MODE_PRACTICE_AI_VS_AI,
  MODE_PRACTICE_SOLO,
  MODE_FFA,
  MODE_TEAM_DEATH_MATCH,
  MODE_AS_ONE,
}

/**
 * Lobby Props Interface
 */
export interface ILobbyProps extends RouteComponentProps, ILobbyReducerState, Pick<ISystemReducerState, "status">, IAuthReducerState {}

/**
 * Lobby State Interface
 */
export interface ILobbyState {
  isLoading: boolean;
  userDialog: { uid: string; x: number; y: number } | false;
  playerUID: string;
  groupUID: string;
  enemyGroupUID: string;
}

declare let sdNet: any;

const resetUIDs: Partial<ILobbyState> = {
  playerUID: "",
  groupUID: "",
  enemyGroupUID: "",
};

const Button = ({ onClick, children, id }: { onClick: () => void; id?: string; children: any }) => (
  <div {...(id ? { id } : {})} className={styles.Button} onClick={onClick}>
    {children}
  </div>
);

/**
 * Lobby
 * @class Lobby
 * @extends Component
 */
export class Lobby extends React.Component<ILobbyProps, Partial<ILobbyState>> {
  /**
   * Variables
   */
  private hideDialogTimer = 0;
  private pingTimer = 0;
  private onlineSkip = -1;

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
      playerUID: "",
      groupUID: "",
      enemyGroupUID: "",
      isLoading: false,
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

  private onOnlinePlayerClick = (e: React.MouseEvent, uid: string) =>
    this.activatePlayerContext(
      e,
      {
        playerUID: uid,
      },
      uid
    );

  private onGroupPlayerClick = (e: React.MouseEvent, uid: string) =>
    this.activatePlayerContext(
      e,
      {
        groupUID: uid,
      },
      uid
    );

  private onEnemyGroupPlayerClick = (e: React.MouseEvent, uid: string) =>
    this.activatePlayerContext(
      e,
      {
        enemyGroupUID: uid,
      },
      uid
    );

  private activatePlayerContext = (e: React.MouseEvent, states: Partial<ILobbyState>, uid: string) => {
    e.stopPropagation();

    if (e.currentTarget) {
      const pos = e.currentTarget.getBoundingClientRect();
      const userDialog = {
        uid,
        x: pos.left,
        y: pos.top + pos.height,
      };

      if (this.state.userDialog && this.state.userDialog.uid === uid) {
        this.setState({ userDialog });
      } else {
        this.setState(
          {
            ...resetUIDs,
            ...states,
            userDialog: false,
          },
          () => {
            this.setState({ userDialog });
            this.startTimer();
          }
        );
      }
    }
  };

  public hideDialogs = () => {
    this.setState({
      userDialog: false,
    });
  };

  private acceptUsersGroup(userUID: string | number) {
    const { uid, loginKey, passwordKey } = this.props;
    store.dispatch({
      type: "FETCH",
      payload: {
        action: "AUTH",
        success: LOBBY_ACTION.ACCEPT_GROUP_INVITE,
        params: {
          request: "accept_group_invite",
          uid,
          key: loginKey,
          pass_plus_key: passwordKey,
          from_uid: userUID,
        },
      },
    });
  }

  private resetTeammateGroup = () => {
    this.acceptUsersGroup(-1);
    this.hideDialogs();
  };

  private resetOpponentGroup = () => {
    this.acceptUsersGroup(-2);
    this.hideDialogs();
  };

  private inviteToGroup = (isEnemyRequest = 0) => {
    const { uid, pass, loginKey, passwordKey } = this.props;
    const { userDialog } = this.state;
    if (!userDialog) {
      return;
    }

    if (!uid || !pass || !passwordKey) {
      return;
    }

    store.dispatch({
      type: "FETCH",
      payload: {
        action: LOBBY_ACTION.INVITE_TO_GROUP,
        params: {
          request: "invite_to_group",
          uid,
          key: loginKey,
          pass_plus_key: passwordKey,
          to_uid: userDialog.uid,
          is_enemy_request: isEnemyRequest,
        },
      },
    });
  };

  private inviteAsTeammate = () => {
    this.inviteToGroup();
    this.hideDialogs();
  };

  private inviteAsOpponent = () => {
    this.inviteToGroup(1);
    this.hideDialogs();
  };

  private pingLoop = () => {
    const { uid, pass, loginKey, passwordKey } = this.props;
    if (!uid || !pass || !passwordKey) {
      store.dispatch({ type: "AUTH", payload: {} });
      return;
    }

    store.dispatch({
      type: "FETCH",
      payload: {
        params: {
          request: "quick_play_ping",
          uid,
          key: loginKey,
          pass_plus_key: passwordKey,
          peer_id: null,
        },
      },
    });

    this.onlineSkip++;

    if (!(this.onlineSkip % 3)) {
      store.dispatch({
        type: "FETCH",
        payload: {
          action: LOBBY_ACTION.PLAYERS_ONLINE,
          params: {
            request: "get_online_players",
            uid,
            key: loginKey,
            pass_plus_key: passwordKey,
          },
        },
      });
    }

    if (!(this.onlineSkip % 4)) {
      store.dispatch({
        type: "FETCH",
        payload: {
          action: LOBBY_ACTION.PLAYERS_GROUP,
          params: {
            request: "get_group_players",
            uid,
            key: loginKey,
            pass_plus_key: passwordKey,
          },
        },
      });
    }

    if (!(this.onlineSkip % 4)) {
      store.dispatch({
        type: "FETCH",
        payload: {
          action: LOBBY_ACTION.PLAYERS_ENEMY_GROUP,
          params: {
            request: "get_enemy_group_players",
            uid,
            key: loginKey,
            pass_plus_key: passwordKey,
          },
        },
      });
    }
  };

  public QuickPlay(mode: any) {
    const { history } = this.props;
    history.push("/play/");
    console.log(mode);
    // GAME_MODE.MODE_FFA -> sdNet.MODE_FFA
    // GAME_MODE.MODE_TEAM_DEATH_MATCH -> sdNet.MODE_TEAM_VS_TEAM
    // GAME_MODE.MODE_AS_ONE -> sdNet.MODE_AS_ONE
  }

  public onPlayClick = (mode: GAME_MODE) => {
    this.setState({
      userDialog: false,
      isLoading: true,
    });

    switch (mode) {
      case GAME_MODE.MODE_PRACTICE_VS_AI:
        sdNet.OfflineTraining(2);
        break;
      case GAME_MODE.MODE_PRACTICE_AI_VS_AI:
        sdNet.OfflineTraining(1);
        break;
      case GAME_MODE.MODE_PRACTICE_SOLO:
        sdNet.OfflineTraining(0);
        break;
      case GAME_MODE.MODE_FFA:
      case GAME_MODE.MODE_TEAM_DEATH_MATCH:
      case GAME_MODE.MODE_AS_ONE:
        this.QuickPlay(mode);
        break;
    }
  };

  private onGroupAction = (uid: string, accept: boolean) => {
    if (accept) {
      this.acceptUsersGroup(uid);
      this.hideDialogs();
    }
  };

  private onEnemyGroupAction = (uid: string, accept: boolean) => {
    if (accept) {
      this.acceptUsersGroup(uid);
      this.hideDialogs();
    }
  };

  componentDidMount() {
    this.onlineSkip = -1;
    this.pingLoop();
    this.pingTimer = window.setInterval(this.pingLoop, 1000);
  }

  public componentWillUnmount() {
    this.clearTimer();
    window.clearInterval(this.pingTimer);
  }

  componentDidUpdate(prevProps: Readonly<ILobbyProps>) {
    if (this.props.passwordKey && prevProps.passwordKey !== this.props.passwordKey) {
      this.pingLoop();
    }
  }

  /**
   * Render Lobby Component
   */
  public render() {
    const { status, playersOnline, playersGroup, playersEnemyGroup, uid } = this.props;
    const { userDialog, playerUID, groupUID, enemyGroupUID, isLoading } = this.state;

    return (
      <div id="lobby_ui" className={styles.Container} onClick={this.hideDialogs}>
        <div className={styles.ContainerInner}>
          <Header variation="secondary">
            <MainMenu variation="secondary" />
          </Header>

          <div className={styles.GameModeActions}>
            <Button onClick={() => this.onPlayClick(GAME_MODE.MODE_PRACTICE_VS_AI)}>Practice VS. AI</Button>
            <Button onClick={() => this.onPlayClick(GAME_MODE.MODE_PRACTICE_AI_VS_AI)}>Play with AI vs AI</Button>
            <Button onClick={() => this.onPlayClick(GAME_MODE.MODE_PRACTICE_SOLO)}>Play alone</Button>
            <Button onClick={() => this.onPlayClick(GAME_MODE.MODE_FFA)} id="play_ffa_btn">
              Free For All <span className={styles.ButtonHighlight}>(2+ players, multiplayer)</span>
            </Button>
            <Button onClick={() => this.onPlayClick(GAME_MODE.MODE_TEAM_DEATH_MATCH)} id="play_tvt_btn">
              Quick Play TvT <span className={styles.ButtonHighlight}>(2+ players, multiplayer)</span>
            </Button>
            <Button onClick={() => this.onPlayClick(GAME_MODE.MODE_AS_ONE)} id="play_as1_btn">
              Quick Play As One <span className={styles.ButtonHighlight}>(4+ players, multiplayer)</span>
            </Button>
            <div id="status_field" className={styles.StatusField}>
              {status}
            </div>
          </div>

          <div className={styles.Content}>
            <div className={styles.PlayersOnline}>
              <PlayerList title="Players in lobby now" active={playerUID} players={playersOnline} onClick={this.onOnlinePlayerClick} />
            </div>

            {playersGroup.length > 1 && (
              <div className={styles.PlayersGroup}>
                <PlayerList title="Your group" active={groupUID} players={playersGroup} onClick={this.onGroupPlayerClick} onAction={this.onGroupAction} />
              </div>
            )}

            {playersEnemyGroup.length > 0 && (
              <div className={styles.PlayersGroup}>
                <PlayerList
                  title="Your opponent group"
                  active={enemyGroupUID}
                  players={playersEnemyGroup}
                  onClick={this.onEnemyGroupPlayerClick}
                  onAction={this.onEnemyGroupAction}
                />
              </div>
            )}
          </div>

          <Footer />
        </div>

        {userDialog && (
          <div
            className={styles.FloatingUserInfo}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => this.clearTimer()}
            onMouseLeave={() => this.startTimer()}
            style={{ left: userDialog.x, top: userDialog.y }}
          >
            <ContextMenu>
              {userDialog.uid !== uid && (
                <>
                  <ContextMenuItem onClick={this.inviteAsTeammate}>Invite to my teammate group</ContextMenuItem>
                  <ContextMenuItem onClick={this.inviteAsOpponent}>Invite as opponent group leader</ContextMenuItem>
                </>
              )}

              {userDialog.uid === uid && (
                <>
                  <ContextMenuItem onClick={this.resetTeammateGroup}>Reset my teammate group</ContextMenuItem>
                  <ContextMenuItem onClick={this.resetOpponentGroup}>Reset opponent group</ContextMenuItem>
                </>
              )}
            </ContextMenu>
          </div>
        )}

        {isLoading && <LoadingOverlay />}
      </div>
    );
  }
}
