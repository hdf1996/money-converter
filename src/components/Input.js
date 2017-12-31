import React, { Component } from 'react'

import './Input.css'

class Input extends Component {
  render () {
    return (
      <div className="input">
        <input type="text" value={this.props.value} />
      </div>
    )
  }
}

Input.defaultProps = {
  value: '',
  placeholder: ''
}

export default Input;
