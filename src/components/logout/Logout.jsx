import React, { Component } from 'react'; 

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='logoutContainer__btn' onClick={this.logout}> Logout </div>
    )
  }
}