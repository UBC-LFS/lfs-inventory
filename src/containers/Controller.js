/* global  */
import React, { Component } from 'react'
import Form from '../components/Form'

export default class Controller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filledForm: false,
    }
    this.errorOutput = this.errorOutput.bind(this)
  }

  errorOutput (state) {
    return 
  }

  handleSubmit (state) {
    return event => {
      event.preventDefault()
      let FD = new FormData()
      const xhr = new XMLHttpRequest()
      xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const json = JSON.parse(xhr.response)
        }
    xhr.open('POST', 'api/form')
    xhr.send(FD)
      }
    }
  }
  

  render () {
    return (
      <div className='app-container'>
        <h1 style={{ textAlign: 'center' }}> lfs-Inventory </h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <br />
      </div>
    )
  }
}
