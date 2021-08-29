import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CurrentPrice from './components/CurrentPrice';
import HistoricalPrice from './components/HistoricalPrice';
import Result from './components/Result';
import AboutMe from './components/AboutMe';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <CurrentPrice/>
        </Route>

        <Route path='/current'>
          <CurrentPrice/>
        </Route>

        <Route path='/history/select'>
          <HistoricalPrice />
        </Route>

        <Route path='/history/result'>
          <Result />
        </Route>

        <Route path='/about'>
          <AboutMe />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
