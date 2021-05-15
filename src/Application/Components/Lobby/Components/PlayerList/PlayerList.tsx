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

const Item = ({icon, title, active}: { title: string, active?: boolean, icon: any }) =>
  <div className={active ? styles.Active : styles.Item}>
    <div className={styles.Icon}>{icon}</div>
    <div className={styles.Element}>{title}</div>
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
          <Item title="Player 1" icon="#"/>
          <Item title="Player 2" icon="#" active/>
          <Item title="Player 3" icon="#"/>
          <Item title="Player 4" icon="#"/>
        </div>
      </>
    );
  }
}
