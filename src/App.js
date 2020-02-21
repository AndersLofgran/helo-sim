import React from 'react';
import Nav from './components/Nav/Nav'
import routes from './routes'
import {withRouter} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App' >
        {this.props.location.pathname === '/'
        ?
          <>
            {routes}
          </>
        : (
          <>
            <Nav />
            {routes}
          </>
        )
        }
        
      </div>
    )
  }
}

export default withRouter(App);
