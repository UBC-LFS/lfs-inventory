import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './Components/formSearch/SearchBar'
import {loadSearch, loadVersions, loadSearchFields} from './services/formDataService'
//import './css/Search.css'

class SearchForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      searchField:'',
      searchText:'',
      searchVersionID:'',
      loading: true
    }
  }
  
  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSelect = (e) => {
    console.log("handleSelect", e.target.value)
    this.setState({ searchField: e.target.value })
  }

  handleClick = (e) => {
    console.log("text ", this.state.searchText)
    const encodedValue = encodeURIComponent(this.state.searchText)
    console.log("encodedValue ", encodedValue)
    loadSearch(encodedValue)
    console.log("handleClick")
  }

  static defaultProps = {
    tableSearchTerms: ['date', 'id', 'user']
  }

  render () {
    let searchTermOptions = this.props.tableSearchTerms.map(searchTerm => {
      return <option key={searchTerm} value={searchTerm}>{searchTerm}</option>
    });

    return (
      <div className='App navbar expand'>
        <div className="headerBar">
          <h1>LFS Inventory Form: Search</h1>
        </div>
        <label> Search Field </label><br />
        <select className='search-dropdown' ref ="searchTermOptions" onChange={this.handleSelect}>
            {searchTermOptions}
        </select>
         <SearchBar searchField={this.state.searchField} searchText={this.state.searchText} onClick={this.handleClick} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default SearchForm