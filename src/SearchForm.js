import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './searchForm/SearchBar'
import {loadSearch, loadVersions} from './services/formDataService'
//import './css/Search.css'

export default class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText:'',
      searchVersionID:'',
      searchFields:[],
      loading: true
    }
  }
  
  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleClick = (e) => {
    console.log("text ", this.state.searchText)
    //loadSearch(e.target.value)
    console.log("handleClick")
  }

  render () {
    return (
      <div className='App navbar expand'>
        <div className="headerBar">
          <h1>LFS Inventory Form: Search</h1>
        </div>
        <SearchBar searchText={this.state.searchText} onClick={this.handleClick} onChange={this.handleChange}/>
      </div>
    )
  }
}