import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className='Nav' >
          <img src={this.props.profile_pic}/>
          <div>Username: {this.props.username}</div>
        <Link to='/dashboard' >
          <div>Home</div>
          </Link>
        <Link to='/new' >
          <div>New Post</div>
          </Link>
        <Link to='/' >
          <div>Logout</div>
          </Link>
        </div>
      </>
    )
  }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Nav)