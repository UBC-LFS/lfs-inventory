import React, { Component } from 'react'
//import './css/Update.css'

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText:'',
      searchFields:[],
      loading: true,
    }
  };
  
  onChange(e) {
    this.setState({searchText: e.target.value});
  }
  
  getResults() {
    calltodb(searchText).then(e => {
      this.setState({searchResults: e.value})
    });
  }

  render () {
    return (
      <div className='App navbar expand'>
        <div className="headerBar">
          <h1>LFS Inventory Form: Search</h1>
        </div>
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

export default UpdateForm;