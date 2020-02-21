import React from 'react'
import axios from 'axios'
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
      this.props.showUserProfile(this.state.username, `https://robohash.org/${this.state.password}.png`)
    })
  }

  register = () => {
    axios.post('/api/auth/register', {username: this.state.username, password: this.state.password, profile_pic: `https://robohash.org/${this.state.password}.png`}).then(user => {
      this.props.history.push('/dashboard')
    })
  }
  
  render() {
    return (
      <>
        <div className='AuthInput'>
          <div>Username: </div>
          <input  onChange={this.handleInputChange}
                  name='username'
                  value={this.state.username}
          />
          <div>Password: </div>
          <input  onChange={this.handleInputChange}
                  name='password'
                  value={this.state.password}
          />
        </div>
        <div className='AuthButtons'>
          <button onClick={this.login} >Login</button>
          <button onClick={this.register} >Register</button>
        </div>
      </>
    )
  }
}

export default connect(null, {showUserProfile})(Auth)