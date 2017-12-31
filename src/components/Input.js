import React, { Component } from 'react'

class Input extends Component {
  render () {
    return (
      <input type="text" value={this.props.value} />
    )
  }
}

Input.defaultProps = {
  value: ''
}

export default Input;
