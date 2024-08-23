import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  isLoggedOut = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="div-container">
        <div className="card-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.isLoggedOut} />
          ) : (
            <Login login={this.isLoggedOut} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
