import React, { Component } from 'react'; 
import HeaderLogin from '../appheader/HeaderLogin.jsx'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        <div>
          <HeaderLogin />
        </div>

        <main>
        <section className="loginContainer">

          <div className="loginContainer__left">
          <div className="loginContainer__left--title">
              Recent Logins
            </div>
            <div className="loginContainer__left--subTitle">
              Click your picture or add account 
            </div>
          </div>

          <div className="loginContainer__right">
            <div className="loginContainer__right--title">
              Create a New Account 
            </div>
            <div className="loginContainer__right--subTitle">
              It's free and always will be  
            </div>
              <form className="loginContainer__form">

                <div className="loginContainer__form--input1">
                <input name="name" placeholder="First name"/>
                <input name="lastName" placeholder="Last name"/>
                </div>

                <div className="loginContainer__form--input2">
                <input name="email" placeholder="Email"/>
                <input name="password" placeholder="New Password"/>
                </div>
                <div className="loginContainer__form--input3">
                By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                </div>
                <input type="submit" value="Sign Up" />
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