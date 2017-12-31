import React, { Component } from 'react'

import Select from './Select'
import Input from './Input'

const CURRENCIES = [{name: 'ARS'}]
class Converter extends Component {
  render () {
    return (
      <div>
        <div>
          <Input value={this.props.amount}/>
          <Select options={CURRENCIES} value={this.props.currency}/>
        </div>
      </div>
    )
  }
}

Converter.defaultProps = {
  amount: 0,
  currency: 'ARS'
}

export default Converter;
