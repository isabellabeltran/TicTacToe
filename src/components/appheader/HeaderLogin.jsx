import React, { Component } from 'react'; 

export default class HeaderLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div className="header">
        <div className="row">
          <div className="col-1-of-2">
            <div className="header__logo">
              PawBook
            </div> 
          </div>
          <div className="col-1-of-2">
            <form className="header__loginForm">
              <div className="header__loginForm--container">
              <div className="header__loginForm--label">Email or Phone</div>
              <input className="header__loginForm--input" name="username" /> 
              </div> 
              <div className="header__loginForm--container">
              <div className="header__loginForm--label">Password</div>
              <input className="header__loginForm--input" name="password" type="password" />
              </div> 
              <input className="header__loginForm--btn" type="submit" value="Log In" />
            </form>
            <div className="header__forgotAccount">
            <a>Forgot Account?</a> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}