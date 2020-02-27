import React from 'react'
import axios from 'axios'
import './Auth.css'
import {connect} from 'react-redux'
import { showUserProfile } from '../../redux/reducer'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = ev => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  login = () => {
    axios.post('/api/auth/login', {username: this.state.username, password: this.state.password}).then(user => {
      this.props.history.push('/dashboard')
      this.props.showUserProfile(user.data.id, user.data.username, user.data.profile_pic)
    })
  }
  
  register = () => {
    axios.post('/api/auth/register', {username: this.state.username, password: this.state.password, profile_pic: `https://robohash.org/${this.state.password}.png`}).then(user => {
      this.props.history.push('/dashboard')
      this.props.showUserProfile(user.data.id, user.data.username, user.data.profile_pic)
    })
  }
  
  render() {
    return (
      <div className='Auth' >
        <img src='https://cdn3.iconfinder.com/data/icons/material-line-thin/1024/happy-512.png' />
        <div className='HeloTitle' >Helo</div>
        <div className='AuthInput'>
          <div>Username:</div>
          <input  onChange={this.handleInputChange}
                  name='username'
                  value={this.state.username}
          />
        </div>
        <div className='AuthInput' >
          <div>Password:</div>
          <input  onChange={this.handleInputChange}
                  name='password'
                  value={this.state.password}
          />
        </div>
        <div className='AuthButtons'>
          <button onClick={this.login} >Login</button>
          <button onClick={this.register} >Register</button>
        </div>
      </div>
    )
  }
}

export default connect(null, {showUserProfile})(Auth)