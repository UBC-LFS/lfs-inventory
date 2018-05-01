import React, {Component} from 'react';
// import '../../css/helper.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: 'Search for inventory item',
      selectedField: this.props.searchField,
      disabled: true, 
      warning: '',
    }

    this.handleChange = this.props.onChange.bind(this)
    this.handleClick = this.props.onClick.bind(this)
  };

  if(searchField) {
    this.setState({ active: true })
  }

  render() {
    return (
      <div className="search-bar">
        <form>
          <input type="text" placeholder={this.state.initialState} disabled={this.state.disabled} onChange={this.handleChange}/>
          <button type="button" onClick={this.handleClick}>Search</button>
        </form>
      </div>  
    );
  }
}