import React, { Component } from 'react'

class Select extends Component {
  render () {
    return (
      <select>
        {this.props.options.map((item, index) => <option key={index}>{item.name}</option>)}
      </select>
    )
  }
}

Select.defaultProps = {
  val: '',
  options: []
}

export default Select;
