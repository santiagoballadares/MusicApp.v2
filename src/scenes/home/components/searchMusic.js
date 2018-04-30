import React, { Component } from 'react';
import DeezerApi from '../../../services/api/dezzerApi';
import SearchBar from './searchBar';
import SearchResult from './searchResult';
import Spinner from '../../../components/spinner/spinner';

class SearchMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      loading: false
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState(
      {
        searchText: searchText
      },
      () => { 
        this.processSearchText();
      }
    );
  }

  componentDidMount() {
    this.processSearchText();
  }

  processSearchText() {
    if (this.isSearchTextEmpty()) {
      this.clearSearchResult();
    }
    else {
      this.searchMusic();
    }
  }

  isSearchTextEmpty() {
    return this.state.searchText === '';
  }

  clearSearchResult() {
    this.setState({ searchResult: [] });
  }

  searchMusic() {
    this.setState({ loading: true });

    DeezerApi.search(this.state.searchText)
    .then(res => {
      this.setState(
        { searchResult: res.data.data || [],
          loading: false
        },
        () => console.log('Done searching music. ' + JSON.stringify())
      );
    })
    .catch(err => console.log('Error searching music: ' + JSON.stringify(err)));
  }

  render() {
    return (
      <div>
        <h1>Need Music?</h1>
        <p className='lead'>Use the MusicApp to browse music and find new releases.</p>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
        />
        {
          this.state.loading && <Spinner />
        }
        <SearchResult result={this.state.searchResult} />
      </div>
    );
  }
}

export default SearchMusic;