import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { createBrowserHistory as history} from 'history';
import HomePage from './components/HomePage/HomePage'
import MeetPage from './components/MeetPage/MeetPage'
import MeetEndPage from './components/MeetEndPage/MeetEndPage'
import './App.css';

class App extends Component{
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route path="/meetpage" component={MeetPage} />
          <Route path="/endmeet" component={MeetEndPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    );
  }

}

export default App;
