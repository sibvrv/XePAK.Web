import React from 'react';
import './Styles/App.css';
import logo from '../Assets/Logo/XePAK_blue.svg';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className="Header">
          <div className="Logo">
            <img src={logo} alt="XePAK" />
          </div>
          <div className="Menu">
            <div className="MenuItem">Ranking</div>
            <div className="MenuItem">Season</div>
            <div className="MenuItem">Statistics</div>
          </div>
        </div>
        <div className="PromotionalPackage">
          <div className="Slogan">
            Become a Pro <strong>XePAK</strong> Player
          </div>

          <div>
            <div className="AreYouReady">
              Are you ready ?
            </div>
            <a href="/play/" className="PlayNow">Play Now</a>
          </div>
        </div>
        <div className="PlayerMiniProfile">
          <div className="MostPowerfulWeapon">
            Most powerful weapon
          </div>
          <div className="PlayerStats">
            <div className="StatsBlock">
              <div className="StatsCounter">95%</div>
              <div className="StatsDescription">Win Rate</div>
            </div>
            <div className="StatsBlock">
              <div className="StatsCounter">32134</div>
              <div className="StatsDescription">Match Played</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
