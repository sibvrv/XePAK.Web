import * as React from 'react';

/**
 * About Props Interface
 */
export interface IAboutProps {
}

/**
 * About State Interface
 */
export interface IAboutState {
}

/**
 * About
 * @class About
 * @extends Component
 */
export class About extends React.Component<IAboutProps, IAboutState> {
  /**
   * Default Props for About Component
   */
  public static defaultProps: Partial<IAboutProps> = {};

  /**
   * About Component Constructor
   * @param {IAboutProps} props
   * @param context
   */
  constructor(props: IAboutProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render About Component
   */
  public render() {
    return (
      <>
        This is a peer-to-peer arena-like shooter game built around ideas of destructive world, inertive movement and
        relative projectile velocities. Should work best in webkit-based web browsers (Opera needs UDP enabled in
        settings. Works "out of box" in Chrome).<br/>
        <br/>
        Controls: W, S, A, D, 1, 2, 3, 4, 5, 6, Left Mouse Button, Right Mouse Button, Mouse Wheel Click, Space, Ctrl,
        Esc, Enter and Tab.<br/>
        <br/>
        There are few game modes (some might be hidden just so it is quicker to find match):<br/>
        * Free for all - you are against everyone else;<br/>
        * Team vs Team - your team against enemy team;<br/>
        * As One - multiple teams, 2 players per each.<br/>
        <br/>
        All game modes are endless, have timer and 6 weapons:<br/>
        * Rifle<br/>
        * Spark gun<br/>
        * Shotgun<br/>
        * Sniper rifle<br/>
        * Rocket launcher<br/>
        * Build tool<br/>
        <br/>
        Weapons have different stats such as knockback, self-knockback, damage, speed, projectile count and spread.<br/>
        <br/>
        It does use
        <a href='https://threejs.org'>three.js</a>,
        <a href='https://peerjs.com'>peer.js</a>,
        <a href='https://www.bfxr.net/'>bfxr.net</a>,
        <a href='http://pieroxy.net/blog/pages/lz-string/index.html'>lz-string.js</a> and
        <a href='https://github.com/ftlabs/ftscroller'>ftscroller.js</a>.
        Music by <a href='http://freemusicarchive.org/music/maD__Alg0rh1tm/'>maD & Alg0rh1tm</a>
      </>
    );
  }
}
