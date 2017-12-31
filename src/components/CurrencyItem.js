import React, { Component } from 'react'

import './CurrencyItem.css'

import { CURRENCIES } from '../helpers/constants'

const convertCurrency = i => i*2

class CurrencyItem extends Component {
  render () {
    return (
      <li className={`currency-item currency-item-${this.props.name.toLowerCase()}`}>
        <h3>{this.props.name}</h3>
        <h1>{convertCurrency(this.props.currentAmount, this.props.name)}</h1>
        <div className="currency-table">
          1 {this.props.currentCurrency} x 654 {this.props.currencyName}
        </div>
      </li>
    )
  }
}

CurrencyItem.defaultProps = {
  name: 'CLP',
  currentCurrency: 'ARS',
  currentAmount: 0
}

export default CurrencyItem;
