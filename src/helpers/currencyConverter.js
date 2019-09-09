import { CURRENCIES } from './constants'
import { filter } from 'lodash'
import { read, write } from './localStorage'

const API_KEY = '8e3466abb4a8df6eba51518902394947'

const API_URL = `https://free.currencyconverterapi.com/api/v5/convert?compact=y&apiKey=6043e1c133665c1b8539

`
const convertCurrency = (originalCurrency, originalAmount, finalCurrency) => {
  const convertionName = `${originalCurrency}_${finalCurrency}`
  if(read(convertionName) !== null) return cachedFetch(convertionName)

  const readValue = fetch(`${API_URL}&q=${convertionName}`)
    .then(response => response.json())
    .then(response => response[Object.keys(response)[0]].val)
  readValue.then(value => write(convertionName, value))
  return readValue
}

const cachedFetch = (currency) => {
  return new Promise((resolve, reject) => {
    resolve(read(currency))
  });
}
export default convertCurrency
