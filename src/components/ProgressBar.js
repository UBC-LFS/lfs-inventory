import React, { Component } from 'react'
import '../css/progressbar.css'

export default class ProgressBar extends Component {
  constructor() {
    super();
      this.state = {
      className_1:'',
      className_2:'',
      className_3:'',
      className_4:'',
    };
  }

  render() {
    // ''
    // is-current
    // is-complete
    return (
      <ol id="progressBar" className="progress-indicator">
        <li className={this.state.className_1} data-step="1">
        </li>
        <li className={this.state.className_2} data-step="2">
        </li>
        <li className={this.state.className_3} data-step="3">
        </li>
        <li className={this.state.className_4} data-step="4">
        </li>
      </ol>
    )
  }
}