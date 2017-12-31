import React, { Component } from 'react'

import './Input.css'

class Input extends Component {
  handleChange = (e) => this.props.onChange(e.target.value)
  render () {
    return (
      <div className="input">
        <input type="text" value={this.props.value} onChange={this.handleChange} />
      </div>
    )
  }
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {}
}

export default Input;
