import React, { Component } from 'react'

import './Converter.css'

import Select from './Select'
import Input from './Input'

const CURRENCIES = ['ARS', 'USD', 'CLP', 'EUR']
class Converter extends Component {
  state = { amount: 40000, currency: 'ARS' }

  changeCurrency = (value) => this.setState({currency: value})

  render () {
    return (
      <div>
        <div className="amount-selector">
          <Input value={this.state.amount}/>
          <Select options={CURRENCIES} value={this.state.currency} onChange={this.changeCurrency}/>
        </div>
        <div>
          <ul>
            <li>USD</li>
          </ul>
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
