import React, {Suspense} from 'react';
import './Styles/App.css';
import {Home} from './Pages/Home';
import {ROUTE} from '../Constants/Routing';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';
import {About} from './Pages/About';
import {Play} from './Pages/Play';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={ROUTE.PAGE_HOME} component={Home}/>
          <Route exact path={ROUTE.PAGE_ABOUT} component={About}/>
          <Route exact path={ROUTE.PAGE_PLAY} component={Play}/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
