import React, {Component} from 'react';
// import '../../css/helper.css';

class UpdateFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: 'Search for inventory item',
      searchText:'',
    }
  };

  updateSearch(searchText) {
    this.setState({searchText});
    console.log('CURRENT TEXT IS: ', {searchText});
  }
  
  render() {
    return (
      <div class="search-bar">
        <form>
          <input type="text" placeholder={this.state.initialState} onChange={this.updateSearch.bind(this, 'searchText')} />
          <button onClick={this.updateSearch.bind(this, 'searchText')}>Search</button>
        </form>
      </div>  
    );
  }
}

export default UpdateFields;