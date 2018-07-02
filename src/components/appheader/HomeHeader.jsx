import React, { Component } from 'react'; 

export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-1-of-2">
            <div className="header__logo">
              petBook
            </div> 
          </div>
          <div className="col-1-of-2">
            
          </div>
        </div>
      </div>
    )
  }
} 