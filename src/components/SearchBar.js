import React, {Component} from 'react';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: 'Search for inventory item',
      searchText:'',
    }
  };

  changeText(searchText) {
    this.setState({searchText});
    console.log('CURRENT TEXT IS: ', {searchText});
  }
  
  render() {
    return (
      <div class="search-bar">
        <form>
          <input type="text" placeholder={this.state.initialState} onChange={this.changeText.bind(this, 'searchText')} />
          <button onClick={this.changeText.bind(this, 'searchText')}>Search</button>
        </form>
      </div>  
    );
  }
}