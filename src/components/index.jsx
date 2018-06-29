import React, { Component } from 'react'; 
import { Switch, Route, Link } from 'react-router-dom';
import Main from './Main.jsx';
import Login from './login/Login.jsx';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={Login}  />
      </Switch> 
    </div>
    )
  }
} 