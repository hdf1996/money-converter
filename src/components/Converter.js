import React, { Component } from 'react'

import './Converter.css'

import Select from './Select'
import Input from './Input'
import CurrencyList from './CurrencyList'

import { CURRENCIES } from '../helpers/constants'
import { read, write } from '../helpers/localStorage'
import filterNumbers from '../helpers/filterNumbers'

class Converter extends Component {
  state = { amount: 1, currency: 'ARS' }

  changeCurrency = (value) => { this.setState({currency: value}); write('currency', value) }
  changeAmount = (value) => { this.setState({amount: Math.max(filterNumbers(value, 1))}); write('amount', Math.max(filterNumbers(value, 1))) }

  componentWillMount = () => {
    this.setState({
      amount: read('amount', 1),
      currency: read('currency', 'ARS')
    })
  }

  render () {
    return (
      <div>
        <div className={`amount-selector currency-item-${this.state.currency.toLowerCase()}`}>
          <div className="container">
            <Input value={this.state.amount} type="number" onChange={this.changeAmount}/>
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
