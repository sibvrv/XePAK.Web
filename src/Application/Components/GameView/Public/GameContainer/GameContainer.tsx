import * as React from "react";

/**
 * GameContainer Props Interface
 */
export interface IGameContainerProps {}

/**
 * GameContainer State Interface
 */
export interface IGameContainerState {}

function loadScript(lib: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelectorAll('[src="' + lib + '"]').length > 0) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.setAttribute("src", lib);
    script.async = false;
    script.onload = () => {
      resolve();
      console.log('Loaded', lib);
    };

    script.onerror = () => {
      reject();
    };

    document.head.appendChild(script);
  });
}

/**
 * GameContainer
 * @class GameContainer
 * @extends Component
 */
export class GameContainer extends React.Component<IGameContainerProps, IGameContainerState> {
  /**
   * Default Props for GameContainer Component
   */
  public static defaultProps: Partial<IGameContainerProps> = {};

  /**
   * GameContainer Component Constructor
   * @param {IGameContainerProps} props
   * @param context
   */
  constructor(props: IGameContainerProps, context?: any) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    [
      "https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js",
      "js/three.js-dev/build/three.js",

      "js/three.js-dev/examples/js/shaders/CopyShader.js",
      "js/three.js-dev/examples/js/postprocessing/EffectComposer.js",
      "js/three.js-dev/examples/js/postprocessing/ShaderPass.js",
      "js/three.js-dev/examples/js/postprocessing/RenderPass.js",
      "js/three.js-dev/examples/js/renderers/Projector.js",
      "js/three.js-dev/examples/js/DeviceOrientationControls.js",

      "js/THREE_addon.js",
      "js/BitmapData.js",
      "js/lz-string.js",
      "js/sdShaderMaterial.js",
      "js/sdRandomPattern.js",
      "js/md5-min.js",

      "pub/polyfills.js",
      "pub/app.js",
    ].forEach(async (script) => {
      await loadScript("/play/" + script);
    });
  }

  /**
   * Render GameContainer Component
   */
  public render() {
    return (
      <>
        <div id="game_container" />

        <div id="ingame_hud" style={{ display: "none" }}>
          <div id="mobile_ui" style={{ display: "none" }}>
            <span
              id="mobile_move_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                left: "5vh",
                width: "30vh",
                height: "30vh",
                backgroundColor: "#ffffff0d",
                bottom: "5vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "30vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Move
            </span>
            <span
              id="mobile_jump_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                left: "36vh",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "24vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Jump
            </span>
            <span
              id="mobile_zoom_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                left: "37vh",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "6vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Zoom
            </span>
            <span
              id="mobile_crouch_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                left: "40%",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "6vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Crouch
            </span>
            <span
              id="mobile_reload_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                right: "40%",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "6vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Reload
            </span>
            <span
              id="mobile_1_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                right: "49vh",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "6vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Rifle
            </span>
            <span
              id="mobile_2_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                right: "49vh",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "24vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Spark
            </span>
            <span
              id="mobile_3_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                right: "41vh",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "40vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Shogtun
            </span>
            <span
              id="mobile_4_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                right: "24vh",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "49vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Sniper
            </span>
            <span
              id="mobile_5_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                right: "5vh",
                width: "14vh",
                height: "14vh",
                backgroundColor: "#ffffff0d",
                bottom: "48vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "14vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              RL
            </span>
            <span
              id="mobile_shoot_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                right: "5vh",
                width: "40vh",
                height: "40vh",
                backgroundColor: "#ffffff0d",
                bottom: "5vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "40vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              Shoot
            </span>
            <span
              id="mobile_x_button"
              className="r_conteiner"
              style={{
                position: "fixed",
                right: "5vh",
                width: "8vh",
                height: "8vh",
                backgroundColor: "#ffffff0d",
                top: "5vh",
                borderRadius: "20vh",
                textAlign: "center",
                lineHeight: "8vh",
                margin: "0px",
                padding: "0px",
                fontSize: "3vh",
                color: "#ffffff24",
              }}
            >
              x
            </span>
          </div>
          {/* Crosshair */}
          {/*<img src="assets/crosshair.png" style="position: fixed;left:50%;margin-left: -8px;margin-top: -8px;top: 50%;">*/}
          <img
            id="crosshair"
            src="assets/crosshair.png"
            style={{ position: "fixed", left: "50%", marginLeft: "-6px", marginTop: "-6px", top: "50%", width: "89px", height: "89px" }}
          />
          {/* Healthbar */}
          <span
            className="r_conteiner"
            style={{
              position: "fixed",
              left: "50%",
              width: "40vh",
              marginLeft: "-20vh",
              bottom: "0.5vh",
              padding: "0.25vh",
              borderRadius: "1.5vh",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <span className="r_conteiner" style={{ width: "100%", display: "inline-block", padding: "0px", borderRadius: "1vh" }}>
              <span
                id="hp_bar"
                className="r_conteiner"
                style={{
                  width: "50%",
                  backgroundColor: "rgba(91, 160, 91, 0.5)",
                  padding: "0vh",
                  textAlign: "center",
                  borderRadius: "1vh",
                  color: "#ffffff",
                  fontSize: "0.8vh",
                  textShadow: "0px 0px 1vh rgba(0,0,0,4)",
                }}
              />
            </span>
          </span>
          {/* Ammo */}
          <span
            id="ammo_bar"
            className="r_conteiner"
            style={{
              position: "fixed",
              bottom: "3vh",
              display: "block",
              left: "50%",
              width: "18vh",
              marginLeft: "-9vh",
              textAlign: "center",
              fontSize: "1vh",
              fontFamily: "courier",
            }}
          >
            100 | 100
          </span>
          {/* Leaderboard */}
          <div id="leader_board" style={{ display: "none" }}>
            <span className="r_conteiner" style={{ position: "fixed", left: "50%", width: "100vh", marginLeft: "-50vh", top: "50%", marginTop: "-25vh" }}>
              <span className="r_conteiner" style={{ width: "100%", marginBottom: "1vh" }}>
                Leaderboard
              </span>
              <span className="r_conteiner" style={{ width: "100%" }}>
                -{/* table caption */}
                <table>
                  <tbody>
                    <tr>
                      <th>Status</th>
                      <th>Player</th>
                      <th>Team</th>
                      <th>Score</th>
                      <th>Kills</th>
                      <th>Deaths</th>
                      <th>Ping</th>
                    </tr>
                    <tr className="red">
                      <td className="mid">*Dead*</td>
                      <td>UnrealCrash</td>
                      <td className="mid">Red team</td>
                      <td className="mid">13</td>
                      <td className="mid">13</td>
                      <td className="mid">3</td>
                      <td className="mid">50 ms</td>
                    </tr>
                    <tr className="red">
                      <td className="mid">*Dead*</td>
                      <td>UnrealCrash</td>
                      <td className="mid">Red team</td>
                      <td className="mid">13</td>
                      <td className="mid">13</td>
                      <td className="mid">3</td>
                      <td className="mid">50 ms</td>
                    </tr>
                    <tr className="blue">
                      <td className="mid">*Dead*</td>
                      <td>UnrealCrash</td>
                      <td className="mid">Blue team</td>
                      <td className="mid">13</td>
                      <td className="mid">13</td>
                      <td className="mid">3</td>
                      <td className="mid">50 ms</td>
                    </tr>
                    <tr className="blue">
                      <td className="mid">*Dead*</td>
                      <td>UnrealCrash</td>
                      <td className="mid">Blue team</td>
                      <td className="mid">13</td>
                      <td className="mid">13</td>
                      <td className="mid">3</td>
                      <td className="mid">50 ms</td>
                    </tr>
                    <tr className="red">
                      <td className="mid">*Dead*</td>
                      <td>UnrealCrash</td>
                      <td className="mid">Red team</td>
                      <td className="mid">13</td>
                      <td className="mid">13</td>
                      <td className="mid">3</td>
                      <td className="mid">50 ms</td>
                    </tr>
                    <tr className="blue">
                      <td className="mid">*Dead*</td>
                      <td>UnrealCrash</td>
                      <td className="mid">Blue team</td>
                      <td className="mid">13</td>
                      <td className="mid">13</td>
                      <td className="mid">3</td>
                      <td className="mid">50 ms</td>
                    </tr>
                    <tr className="blue">
                      <td className="mid">*Dead*</td>
                      <td>UnrealCrash</td>
                      <td className="mid">Blue team</td>
                      <td className="mid">13</td>
                      <td className="mid">13</td>
                      <td className="mid">3</td>
                      <td className="mid">50 ms</td>
                    </tr>
                    <tr className="blue">
                      <td className="mid">*Dead*</td>
                      <td>UnrealCrash</td>
                      <td className="mid">Blue team</td>
                      <td className="mid">13</td>
                      <td className="mid">13</td>
                      <td className="mid">3</td>
                      <td className="mid">50 ms</td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </span>
          </div>
          {/* Team score */}
          <span
            id="score_keeper"
            className="r_conteiner"
            style={{
              position: "fixed",
              left: "50%",
              width: "26vh",
              marginLeft: "-13vh",
              top: "0vh",
              borderRadius: "0 0 9vh 9vh",
              padding: "0.5vh",
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <span className="team_score" style={{}}>
              23
            </span>
            <span className="team_score" style={{}}>
              41
            </span>
            <span className="team_score" style={{}}>
              23
            </span>
            <span className="team_score" style={{}}>
              41
            </span>
          </span>
          <span
            id="clocks"
            style={{
              position: "fixed",
              left: "50%",
              top: "5vh",
              width: "10vh",
              marginLeft: "-5vh",
              verticalAlign: "middle",
              textAlign: "center",
              color: "rgba(0,0,0,0.4)",
            }}
          >
            1:41
          </span>
          {/* Chat */}
          <span
            id="chat_box"
            className="r_conteiner"
            style={{ position: "fixed", left: "1vh", width: "26vh", bottom: "5vh", backgroundColor: "rgba(0,0,0,0.6)", padding: 0 }}
          />
          <input
            type="text"
            id="chat_input_box"
            className="r_conteiner clickable"
            style={{ position: "fixed", left: "1vh", width: "26vh", bottom: "1vh", backgroundColor: "rgba(0,0,0,0.3)", display: "none" }}
            contentEditable="true"
          />
          <span
            id="menu"
            className="r_conteiner clickable"
            style={{
              position: "fixed",
              left: "50%",
              width: "78vh",
              marginLeft: "-39vh",
              top: "50%",
              marginTop: "-44vh",
              backgroundColor: "rgba(27, 27, 27, 0.95)",
            }}
          >
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Sensitivity:</span>
              <input
                id="sensitivity"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max="0.01"
                step="0.0001"
                /* onChange={() => {
                  localStorage.setItem("stardefenders_sensitivity", this.value);
                  main.sensitivity = Number(this.value);
                  main.ShowSliderNumber(this, 0);
                }}
                onFocus="main.ShowSliderNumber( this, 1 );"
                onBlur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Turn method:</span>
              <select
                id="turn_method"
                style={{
                  width: "80%",
                  display: "inline-block",
                }}
                /* onchange="localStorage.setItem('stardefenders_turn_method', this.value ); main.turn_method = Number( this.value );" */
              >
                <option value={0}>Freely</option>
                <option value={1}>2-Axis</option>
              </select>
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Quality:</span>
              <input
                id="quality"
                className="slider"
                style={{ width: "60%", display: "inline-block" }}
                type="range"
                min={0}
                max={1}
                step="0.01"
                /* onchange="main.SetPixelRatio( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>AI difficulty</span>
              <input
                id="ai_difficulty"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max={1}
                step="0.01"
                /* onchange="localStorage.setItem('ai_difficulty', this.value ); main.ai_difficulty = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>FOV:</span>
              <input
                id="fov"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={60}
                max={180}
                step={1}
                /* onchange="localStorage.setItem('stardefenders_fov', this.value ); main.fov = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Light intensity:</span>
              <input
                id="dynamic_light_intensity"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max={1}
                step="0.01"
                /* onchange="localStorage.setItem('stardefenders_dynamic_light_intensity', this.value ); main.dynamic_light_intensity = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Sound volume:</span>
              <input
                id="sound_volume"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max={1}
                step="0.001"
                /* onchange="localStorage.setItem('stardefenders_sound_volume', this.value ); main.sound_volume = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Music volume:</span>
              <input
                id="music_volume"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max={1}
                step="0.001"
                /* onchange="localStorage.setItem('stardefenders_music_volume', this.value ); main.music_volume = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Gun X offset</span>
              <input
                id="gun_x_offset"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={-10}
                max={10}
                step="0.25"
                /* onchange="localStorage.setItem('stardefenders_gun_x_offset', this.value ); main.gun_x_offset = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Gun Y offset</span>
              <input
                id="gun_y_offset"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={-10}
                max={10}
                step="0.25"
                /* onchange="localStorage.setItem('stardefenders_gun_y_offset', this.value ); main.gun_y_offset = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );" */
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Gun Z offset</span>
              <input
                id="gun_z_offset"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={-10}
                max={10}
                step="0.25"
                /* onchange="localStorage.setItem('stardefenders_gun_z_offset', this.value ); main.gun_z_offset = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );"*/
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Gun recoil</span>
              <input
                id="gun_recoil"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max={5}
                step="0.1"
                /*onchange="localStorage.setItem('stardefenders_gun_recoil', this.value ); main.gun_recoil = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );"*/
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>First person camera</span>
              <input
                id="first_person_camera"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max={1}
                step={1}
                /*onchange="localStorage.setItem('stardefenders_first_person_camera', this.value ); main.first_person_camera = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                onfocus="main.ShowSliderNumber( this, 1 );"
                onblur="main.ShowSliderNumber( this, 2 );"*/
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Report damage</span>
              <input
                id="report_damage"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max={1}
                step={1}
                /*                onchange="localStorage.setItem('report_damage', this.value ); main.report_damage = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                                onfocus="main.ShowSliderNumber( this, 1 );"
                                onblur="main.ShowSliderNumber( this, 2 );"*/
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <div style={{ marginBottom: "1vh" }}>
              <span style={{ display: "inline-block", width: "20%" }}>Low physics</span>
              <input
                id="low_physics"
                className="slider"
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
                type="range"
                min={0}
                max={1}
                step={1}
                /*                onchange="localStorage.setItem('low_physics', this.value ); main.low_physics = Number( this.value ); main.ShowSliderNumber( this, 0 );"
                                onfocus="main.ShowSliderNumber( this, 1 );"
                                onblur="main.ShowSliderNumber( this, 2 );"*/
              />
              <input type="text" defaultValue="?" style={{ width: "15%", display: "inline-block", marginLeft: "1vh" }} />
            </div>
            <a
              href="javascript:document.getElementById('menu').style.display='none';main.ingame_menu_visible=false;main.GoFullscreen();"
              className="r_conteiner"
              style={{ marginBottom: "1vh", backgroundColor: "#254e36" }}
            >
              Continue
            </a>
            <a href="javascript:sdNet.EndGame();" className="r_conteiner" style={{ backgroundColor: "#482926" }}>
              Leave match
            </a>
          </span>
        </div>
      </>
    );
  }
}
