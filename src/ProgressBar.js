import React, { Component } from 'react'
import Wizard from './components/MultiStep'
import './css/progressbar.css'



export default class ProgressBar extends Component {
  state = {
      step: 0
  }

  render() {
    
    return (
    <ol id="progressBar" class="progress-indicator">
      <li className="" data-step="1">
      </li>
      <li className="" data-step="2">
      </li>
      <li className="" data-step="3">
      </li>
      <li className="" data-step="4">
      </li>
    </ol>
    )
  }
}