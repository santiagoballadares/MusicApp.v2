import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <div className='form-group'>
          <input 
            type='text'
            placeholder='Search...'
            value={this.props.searchText}
            onChange={this.handleSearchTextChange}
            className='form-control'
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;