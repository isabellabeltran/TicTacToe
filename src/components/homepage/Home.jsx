import React, { Component } from 'react'; 
import HomeHeader from '../appheader/HomeHeader.jsx'; 

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <HomeHeader />  
        </div>  
        <div>
          
        </div>
      </div>
    )
  }
} 