import React, { Component } from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import ReactDOM from 'react-dom';
// import Basic from './createForm/Form'
import Multi from './createForm/MultiStep'
import ProgressBar from './progressbar/ProgressBar'
import './css/FillForm.css'

class FillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalStep:0,
    }
  };

  onHandlePrev = (event) => {
    console.log("handling prev")
  };

  onHandleNext = (event) => {
  };

  render () {
    return (
      <div className='App navbar expand'>
        <div className="headerBar">
          <h1>LFS Inventory Form: New Entry</h1>
        </div>
        <ProgressBar />
        <Multi onHandlePrev={this.onHandlePrev.bind(this)} onHandleNext={this.onHandleNext.bind(this)}/>
      </div>
    )
  }
}
export default FillForm
