import React, { Component } from 'react'

import './CurrencyItem.css'

import { CURRENCIES } from '../helpers/constants'
import convertCurrency from '../helpers/currencyConverter'

class CurrencyItem extends Component {
  state = { convertedAmount: null, conversionValue: null }

  componentWillReceiveProps = (props) => this.handleUpdate(props)
  componentWillMount = () => this.handleUpdate(this.props)

  handleUpdate = (props) => {
    convertCurrency(props.currentCurrency, props.currentAmount, props.name)
      .then(response => this.setState({convertedAmount: response * props.currentAmount}))
  }

  render () {
    return (
      <li className={`currency-item currency-item-${this.props.name.toLowerCase()}`}>
        <h3>{this.props.name}</h3>
        <h1>{this.state.convertedAmount}</h1>
        <div className="currency-table">
          1 {this.props.currentCurrency} x {this.state.conversionValuey} {this.props.currencyName}
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
