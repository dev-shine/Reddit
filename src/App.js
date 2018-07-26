import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import * as routes from './constants/routes';

import Navigation from './components/Navigation';
import Landing from './components/Landing';
import SignUp from './components/Signup';
import SignIn from './components/SignIn';
import PasswordForget from './components/PasswordForget';
import Home from './components/Home';
import Account from './components/Account';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation/>
          <hr/>

          <Route exact path={routes.HOME} component = {()=> <Home/>}/>
          <Route exact path={routes.SIGN_UP} component = {()=> <SignUp/>}/>
          <Route exact path={routes.SIGN_IN} component = {()=> <SignIn/>}/>
          <Route exact path={routes.LANDING} component = {()=> <Landing/>}/>
          <Route exact path={routes.ACCOUNT} component = {()=> <Account/>}/>
          <Route exact path={routes.PASSWORD_FORGET} component = {()=> <PasswordForget/>}/>
        </Router>
      </div>
    );
  }
}

export default App;
