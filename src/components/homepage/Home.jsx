import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import HomeHeader from '../appheader/HomeHeader.jsx'; 
import yellow from '../../images/yellow.jpg';
import matthew from '../../images/matthew.jpg';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '', 
      lastname: '',
      email: '', 
      status: '',
      treats: ''
    }
  }

  handleStorage = async () => {
    const { id, name, lastname, email, status, treats } =  JSON.parse(localStorage.user);
    this.setState({
      id: id, 
      name: name, 
      lastname: lastname,
      email: email, 
      status: status,
      treats: treats 
    }); 
    console.log(this.state.email, this.state.name, this.state.lastname);
  }

  handleInput = (e) => {
    const { name, value } = e.target; 
    this.setState({
      [name]: value
    });
  }

  updateStatus = async(e) => {
    e.preventDefault();
    const { id, status } = this.state; 
    try {
      const body = {
        id: id, 
        status: status
      }
      const data = await axios.post('http://localhost:3000/api/updateStatus', body); 
      console.log('Data back from status', data);
    } catch (err) {
      console.log('Error saving user status into database', err);
    }
  }

  componentDidMount() {
    this.handleStorage(); 
  }

  render() {
    return (
      <div>
        <div>
          <HomeHeader history={this.props.history} />  
        </div>  
        <div className="homeContainer">
        <div className="homeContainer__images">
          <div className="homeContainer__images--username">
            {`${this.state.name} ${this.state.lastname}`}
          </div>
          <div className="homeContainer__backimage">
          </div>
          <div className="homeContainer__userImage">
          <img className="homeContainer__userImage--img" src={matthew} />
          </div>
        </div>

          <div className="homeContainer__friends">
          
          </div>

          <div className="homeContainer__user"> 

            <div className="personalInfo">
              <div className="personalInfo__header">
                <FontAwesomeIcon className="personalInfo__header--icon" icon="paw" size="2x" />
                <h3 className="personalInfo__header--title">Intro</h3>
              </div> 

              <div className="personalInfo__status">
              <form className="personalInfo__status--form" onSubmit={this.updateStatus} >
                <input onChange={this.handleInput.bind(this)} name="status" className="personalInfo__status--input" placeholder="What's on your mind?" />
                <input className="personalInfo__status--btn" type="submit" value="?" />
              </form>
              </div>

              <div className="personalInfo__treats">
              
              </div>
            </div>
            <div className="homeContainer__feed"></div>
          </div> 

        </div>

      </div>
    )
  }
} 