import React, {Component} from 'react';

export default class SearchResults extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerms: '',
      searchResults:[], 
      loading: true, 
    }
    this.findItemEntry = this.findItemEntry.bind(this)
    this.findItemVersions = this.findItemVersions.bind(this)
  }

  componentWillMount () {
    this.findItemEntry()
  }

  findItemEntry () {
    let FD = new FormData()
    for (let term in searchTerms) {
      FD.append(term, searchTerms[term])
    }
    const xhr = new XMLHttpRequest()
    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const json = JSON.parse(xhr.response)
        if (json.type === 'render') {
          this.setState({
            applicationNumber: json.searchResults,
          }, this.forceUpdate())
        }
      }
    }
    xhr.open('GET', 'api/form')
    xhr.send(FD)
  }

  findItemVersions () {

  }

  render() {
    
  }

}

export default SearchResults;