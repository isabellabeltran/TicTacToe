import React, { Component } from 'react'; 
import HeaderLogin from '../appheader/HeaderLogin.jsx'; 
import axios from 'axios'; 

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '', 
      email: '',
      password: '' 
    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target; 
    this.setState({
      [name]: value 
    }); 
    console.log('onChange', e.target.value)
  }

  handleCreateAccount = async (e) => {
    e.preventDefault(); 
    const { history } = this.props; 
    const { name, lastName, email, password } = this.state; 
    const body = {
      name, 
      lastName, 
      email, 
      password
    }
    try {
      const { data } = await axios.post('http://localhost:3000/api/createAccount', body);
      console.log('Success creating new account', data );
      localStorage.setItem('user', JSON.stringify({
        id: data.id,
        name: data.name,  
        lastname: data.lastname,  
        profilepicture: data.profilepicture,
        email: data.email, 
        status: data.status, 
        treats: data.treats,
        token: data.token.accessToken 
      }));
      history.push('/home'); 
    } catch (err) {
      console.log('Error from createAccount - ', err); 
    }
  }


  render () {
    return (
      <div>
        <div>
          <HeaderLogin history={this.props.history} />
        </div>

        <main>
        <section className="loginContainer">

          <div className="loginContainer__left">
          <div className="loginContainer__left--title">
              {/* Recent Logins */}
            </div>
            <div className="loginContainer__left--subTitle">
              {/* Click your picture or add account  */}
            </div>
          </div>

          <div className="loginContainer__right">
            <div className="loginContainer__right--title">
              Create a New Account 
            </div>
            <div className="loginContainer__right--subTitle">
              It's free and always will be  
            </div>
              <form className="loginContainer__form" onSubmit={this.handleCreateAccount}>
                <input onChange={this.handleOnChange.bind(this)} className="loginContainer__form--input1" name="name" placeholder="First name"/>
                <input onChange={this.handleOnChange.bind(this)} className="loginContainer__form--input1" name="lastName" placeholder="Last name"/>

                <div className="loginContainer__form--container">
                <input onChange={this.handleOnChange.bind(this)} className="loginContainer__form--input2" name="email" placeholder="Email"/>
                <input onChange={this.handleOnChange.bind(this)} className="loginContainer__form--input2" type="password" name="password" placeholder="New Password"/>
                </div>

                <div className="loginContainer__form--container">
                By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                </div>
                <input className="loginContainer__form--btn" type="submit" value="Sign Up" />
              </form>
          </div>

        </section>
        </main>

        <footer>
        </footer> 
      </div>
    )
  }
}