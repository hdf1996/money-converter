const write = (currency, value) => localStorage.setItem(currency, value)

const read = currency => localStorage.getItem(currency)

export { write, read }
