import React, { Component } from 'react'
import SearchForm from './SearchForm'
import FillForm from './FillForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalStep:0,
      query: '',
      isNewEntry: false,
      isSearchOrUpdate: false,
    }
  };

  onHandlePrev = (event) => {
    console.log("handling prev")
  };

  onHandleNext = (event) => {
    console.log("handling next")
  };

  handleClick = (event) => {
    if (event === 1) {
      this.setState({
        query: '/form',
      });
    } else if (event === 2) {
      this.setState({
        query: '/search',
      });
    }
    window.location = this.state.query
  };


  NoMatch = () => (
    <p>No Match</p>
  );

  render () {
    if(this.state.isNewEntry){
      return <FillForm/>;
    }
    if(this.state.isSearchOrUpdate){
      return <SearchForm/>;
    }
    return (
      <div className='App navbar expand'>
        <div className="headerBar">
          <h1>LFS Inventory Form</h1>
        </div>
          <button handleClick={this.handleClick(1)} className="button">New Entry</button>
          <button handleClick={this.handleClick(2)} className="button">Search Or Update</button>
      </div>
    )
  }
}



/*
const RoutedApp = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App} />
        <Route path="/form" component={FillForm} />       
        <Route path="/search" component={SearchForm} />   
        <Route path="/search/:searchTerm" component={SearchForm} />  
        <Route path="/search/version?:entryID" component={SearchForm} />   
        <Route path="/*" component={NoMatch} />   
      </Switch>   
  </BrowserRouter>
);
*/
export default App