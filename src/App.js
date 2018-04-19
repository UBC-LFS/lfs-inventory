import React, { Component } from 'react'


class App extends Component {
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
          <h1>LFS Inventory Form</h1>
        </div>
          <SearchForm />
          <FillForm />
          <UpdateForm />
      </div>
    )
  }
}
export default App