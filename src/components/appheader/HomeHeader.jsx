import React, { Component } from 'react'; 
import logo from '../../images/logopb.png';

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
            <div className="container">
              <img className="container__logo" src={logo} />
              <div className="container__search">
              <form className="container__search--form">
                <input className="container__search--input" />
                <input className="container__search--btn" type="submit" value="search" />
              </form>
              </div>
            </div> 
          </div>

          <div className="col-1-of-2">
            
          </div>
        </div>
      </div>
    )
  }
} 