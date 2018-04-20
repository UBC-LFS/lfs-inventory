import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: 'Search for inventory item',
    }

    this.handleChange = this.props.onChange.bind(this)
    this.handleClick = this.props.onClick.bind(this)
  };
  
  render() {
    return (
      <div className="search-bar">
        <form>
          <input type="text" placeholder={this.state.initialState} onChange={this.handleChange}/>
          <button type="button" onClick={this.handleClick}>Search</button>
        </form>
      </div>  
    );
  }
}