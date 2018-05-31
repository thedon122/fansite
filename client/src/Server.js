import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import HomePage from './components/HomePage'
import User from './components/User'
import UserProfile from './components/UserProfile'

class Server extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path= "/" component={HomePage}/>
          <Route path= "/user" component={User}/>
          <Route path= "/user/:userId" component={UserProfile}/>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default Server;
