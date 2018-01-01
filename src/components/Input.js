import React, { Component } from 'react'

import './Input.css'

class Input extends Component {
  handleChange = (e) => this.props.onChange(e.target.value)
  render () {
    return (
      <div className="input">
        <input type={this.props.type} value={this.props.value} onChange={this.handleChange} />
      </div>
    )
  }
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
  type: 'text'
}

export default Input;
