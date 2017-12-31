import React, { Component } from 'react'

import './CurrencyItem.css'

class CurrencyItem extends Component {
  render () {
    return (
      <li className="currency-item">
        <h3>{this.props.currencyName}</h3>
        <h1>{this.props.currencyAmount}</h1>
        <div className="currency-table">
          1 {this.props.currentCurrency} x 654 {this.props.currencyName}
        </div>
      </li>
    )
  }
}

CurrencyItem.defaultProps = {
  currencyName: 'CLP',
  currentCurrency: 'ARS',
  currencyAmount: 0
}

export default CurrencyItem;
