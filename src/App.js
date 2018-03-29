import React, { Component } from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import ReactDOM from 'react-dom';
// import Example from './components/Example';
// import Basic from './components/Form'
import Multi from './components/MultiStep'
import ProgressBar from './ProgressBar'
import './css/App.css'

class App extends Component {
  render () {
    return (
      <div className='App navbar expand'>
        <div className="headerBar">
          <h1>LFS Inventory Form</h1>
        </div>
        <ProgressBar />
        <Multi />
      </div>
    )
  }
}
export default App
