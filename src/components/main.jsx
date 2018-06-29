import React, { Component } from 'react'; 
import HeaderLogin from './appheader/Header.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <HeaderLogin /> 
      </div>
    )
  }
} 