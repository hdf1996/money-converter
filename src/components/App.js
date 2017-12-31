import React, { Component } from 'react'
import Converter from './Converter'
import './App.css'

class App extends Component {
  state = { amount: 0, currency: 'ARS' }
  render () {
    return (
      <Converter {...this.state}/>
    )
  }
}

export default App;
