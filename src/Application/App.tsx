import React, {Suspense} from 'react';
import './Styles/App.css';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';

import {ROUTE} from '../Constants/Routing';

import {About} from './Pages/About';
import {Home} from './Pages/Home';
import {Play} from './Pages/Play';
import {Ranking} from './Pages/Ranking';
import {Season} from './Pages/Season';
import {Statistics} from './Pages/Statistics';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={ROUTE.PAGE_HOME} component={Home}/>
          <Route exact path={ROUTE.PAGE_ABOUT} component={About}/>
          <Route exact path={ROUTE.PAGE_PLAY} component={Play}/>
          <Route exact path={ROUTE.PAGE_RANKING} component={Ranking}/>
          <Route exact path={ROUTE.PAGE_SEASON} component={Season}/>
          <Route exact path={ROUTE.PAGE_STATISTICS} component={Statistics}/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
