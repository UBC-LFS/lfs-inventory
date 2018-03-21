import React, { Component } from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import ReactDOM from 'react-dom';
// import Example from './components/Example';
// import Basic from './components/Form'
import Multi from './components/MultiStep'
import './App.css'

require('./css/main.css');

class App extends Component {
  render () {
    return (
      <div className='App navbar expand'>
        <Multi />
      </div>
    )
  }
}

export default App
