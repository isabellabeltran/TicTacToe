import React, { Component } from 'react'; 
import axios from 'axios';

export default class HeaderLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target; 
    this.setState({
      [name]: value
    })
  }

  handleVerifyLogin = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { email, password } = this.state; 
    try {
      const body = {
        email, 
        password
      }
      const { data } = await axios.post('http://localhost:3000/api/verifyLogin', body); 
      console.log('Data? ', data);
      localStorage.setItem('user', JSON.stringify({
        id: data.id,
        name: data.name,
        lastname: data.lastname, 
        treats: data.treats, 
        status: data.status,
        email: data.email,
        token: data.token.accessToken
      }));
      history.push('/home'); 
    } catch (err) {
      console.log('Error verifying account - ', err);
    }
  }

  render () {
    return (
      <div className="header">
        <div className="row">
          <div className="col-1-of-2">
            <div className="header__logo">
              petBook
            </div> 
          </div>
          <div className="col-1-of-2">
            <form className="header__loginForm" onSubmit={this.handleVerifyLogin.bind(this)}>
              <div className="header__loginForm--container">
              <div className="header__loginForm--label">Email</div>
              <input onChange={this.handleOnChange.bind(this)} className="header__loginForm--input" name="email" /> 
              </div> 
              <div className="header__loginForm--container">
              <div className="header__loginForm--label">Password</div>
              <input onChange={this.handleOnChange.bind(this)} className="header__loginForm--input" name="password" type="password" />
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