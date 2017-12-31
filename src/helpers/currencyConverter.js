import { CURRENCIES } from './constants'
import { filter } from 'lodash'

const API_KEY = '8e3466abb4a8df6eba51518902394947'

const API_URL = `https://free.currencyconverterapi.com/api/v5/convert?compact=y`
const convertCurrency = (originalCurrency, originalAmount, finalCurrency) => {
  // return fetch(`${API_URL}&date=${'2017-12-31'}&currencies=${filter(CURRENCIES, i => i != originalCurrency).map(i => i.name)}`)
  return fetch(`${API_URL}&q=${originalCurrency}_${finalCurrency}`)
    .then(response => response.json())
    .then(response => response[Object.keys(response)[0]].val)
}

export default convertCurrency
