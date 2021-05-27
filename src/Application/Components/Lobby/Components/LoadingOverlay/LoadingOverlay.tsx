import * as React from "react";

import { Loading } from "../../../Common/Loading/Loading";

import {BorderImage} from './BorderImage';
import styles from "./Styles/LoadingOverlay.module.css";

/**
 * LoadingOverlay Props Interface
 */
export interface ILoadingOverlayProps {}

/**
 * LoadingOverlay State Interface
 */
export interface ILoadingOverlayState {}

/**
 * LoadingOverlay
 * @class LoadingOverlay
 * @extends Component
 */
export class LoadingOverlay extends React.Component<ILoadingOverlayProps, ILoadingOverlayState> {
  /**
   * Default Props for LoadingOverlay Component
   */
  public static defaultProps: Partial<ILoadingOverlayProps> = {};

  /**
   * LoadingOverlay Component Constructor
   * @param {ILoadingOverlayProps} props
   * @param context
   */
  constructor(props: ILoadingOverlayProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  /**
   * Render LoadingOverlay Component
   */
  public render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Context}>
          <div className={styles.ModalBox}>
            <div className={styles.BorderLeftTop}>
              <BorderImage />
            </div>
            <div className={styles.BorderRightTop}>
              <BorderImage />
            </div>
            <div className={styles.BorderLeftBottom}>
              <BorderImage />
            </div>
            <div className={styles.BorderRightBottom}>
              <BorderImage />
            </div>

            <Loading caption="Building map, please wait..." />
            <span className={styles.Info}>(it can take 15 seconds or more, depending on browser and PC characteristics)</span>
          </div>
        </div>
      </div>
    );
  }
}
