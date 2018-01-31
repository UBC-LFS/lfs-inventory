import React, { Component } from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ReactDOM from 'react-dom';
import Example from './components/Example';
import './App.css'

require('./css/main.css');

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Example />  
      </div>
    )
  }
}

export default App
