import React, { Component } from 'react'

import './Converter.css'

import Select from './Select'
import Input from './Input'
import CurrencyList from './CurrencyList'

import { CURRENCIES } from '../helpers/constants'

class Converter extends Component {
  state = { amount: 19, currency: 'ARS' }

  changeCurrency = (value) => this.setState({currency: value})
  changeAmount = (value) => this.setState({amount: value})

  render () {
    return (
      <div>
        <div className={`amount-selector currency-item-${this.state.currency.toLowerCase()}`}>
          <div className="container">
            <Input value={this.state.amount} onChange={this.changeAmount}/>
            <Select options={CURRENCIES} value={this.state.currency} onChange={this.changeCurrency}/>
          </div>
        </div>
        <div className="currency-list-container">
          <CurrencyList currentCurrency={this.state.currency} amount={this.state.amount}/>
        </div>
      </div>
    )
  }
}

export default Converter;
