import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import './Nav.css'

class Nav extends React.Component {

  logout = () => {
    axios.post('/api/auth/logout')
  }
  
  render() {
    return (
      <>
        <div className='Nav' >
          <div className='NavProfile' >
            <img className='NavPic' src={this.props.profile_pic}/>
            <div>{this.props.username}</div>
          </div>
          <div className='NavButtons' >
            <div>
              <Link to='/dashboard' >
                <img className='NavIcon' src='https://i.ya-webdesign.com/images/home-icon-png-8.png' />
              </Link>
              <Link to='/new' >
                <img className='NavIcon' src='https://cdn4.iconfinder.com/data/icons/glyph-1-ui-part-4-of-4/100/pack07-05-512.png' />
              </Link>
            </div>
            <div>
              <Link to='/' >
                <img onClick={this.logout} className='NavIcon' src='https://simpleicon.com/wp-content/uploads/powe-symbol-3.png' />
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Nav)