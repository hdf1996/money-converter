import React, { Component } from 'react'

import './Select.css'

class Select extends Component {
  handleChange = value => this.props.onChange(value)
  render () {
    return (
      <div className="select">
        {this.props.options.map((item, index) =>
          <div onClick={() => this.handleChange(item)}
               className={`select-item ${item === this.props.value && 'selected'}`}
               key={index}>
            {item}
          </div>
        )}
      </div>
    )
  }
}

Select.defaultProps = {
  value: '',
  options: [],
  onChange: () => {}
}

export default Select;
