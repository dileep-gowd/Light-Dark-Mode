/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true}

  lightTheme = () => {
    this.setState(() => ({darkMode: false}))
  }

  darkTheme = () => {
    this.setState(() => ({darkMode: true}))
  }

  render() {
    const {darkMode} = this.state
    return (
      <div className="bg-cont">
        {darkMode ? (
          <div className="dark-cont">
            <h1 className="dh">Click To Change Mode</h1>
            <button onClick={this.lightTheme}>Light Mode</button>
          </div>
        ) : (
          <div className="light-cont">
            <h1 className="lh">Click To Change Mode</h1>
            <button onClick={this.darkTheme}>Dark Mode</button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
