import React, { Component } from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import ReactDOM from 'react-dom';
// import Example from './components/Example';
import Basic from './components/Form'
import './App.css'

require('./css/main.css');

class App extends Component {
  render () {
    return (
      <div className='App navbar expand'>
        <Basic />
      </div>
    )
  }
}

export default App
