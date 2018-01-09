const write = (currency, value) => localStorage.setItem(currency, value)

const read = (currency, defaultValue = null) => (localStorage.getItem(currency) || defaultValue)

export { write, read }
