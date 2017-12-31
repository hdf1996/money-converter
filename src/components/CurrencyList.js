import React, { Component } from 'react'
import { filter } from 'lodash'

import CurrencyItem from './CurrencyItem'
import { CURRENCIES } from '../helpers/constants'

import './CurrencyList.css'

class CurrencyList extends Component {
  render () {
    return (
      <ul className="currency-list">
        {filter(CURRENCIES, item => item.name !== this.props.currentCurrency).map((item, index) =>
          <CurrencyItem key={`currency-${index}`}
                        currencyAmount={this.props.amount}
                        currentCurrency={this.props.currentCurrency}
                        currencyName={item.name} />)}
      </ul>
    )
  }
}

CurrencyList.defaultProps = {
  currentCurrency: 'ARS',
  amount: 0
}

export default CurrencyList;
