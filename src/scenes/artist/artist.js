import React, { Component } from 'react';
import DeezerApi from '../../services/api/dezzerApi';
import Albums from './components/albums';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      artist: {
        name: '',
        picture: ''
      },
      albums: [],
      genres: []
    }
    const { match: { params } } = this.props;
    this.state.id = params.id;
  }

  componentDidMount() {
    this.getArtist();
    this.getAlbums();
  }

  getArtist() {
    DeezerApi.getArtist(this.state.id)
    .then(res => {
      this.setState(
        { artist: res.data || {} },
        () => console.log('Done retrieving artist. ' + JSON.stringify())
      );
    })
    .catch(err => console.log('Error retrieving artist: ' + JSON.stringify(err)));
  }

  getAlbums() {
    DeezerApi.getAlbums(this.state.id)
    .then(res => {
      this.setState(
        { albums: res.data.data || [] },
        () => console.log('Done retrieving albums. ' + JSON.stringify())
      );
      this.getGenres();
    })
    .catch(err => console.log('Error retrieving albums: ' + JSON.stringify(err)));
  }

  getGenres() {
    const genres = this.state.albums.map(
      item => item.genre_id
    ).filter(
      (item, index, self) => index === self.indexOf(item)
    );
    this.setState({ genres: genres });
  }

  render() {
    const artist = this.state.artist;
    return (
      <div>
        <header>
          <div className='row'>
            <div className='col-md-2'>
              <img className='rounded-circle' src={artist.picture} alt={artist.name} />
            </div>
            <div className='col-md-10'>
              <h1>{artist.name}</h1>
               <p><strong>Genres: </strong> <span>{this.state.genres.join(', ')}</span></p>
            </div>
          </div>
        </header>
        <hr />
        <Albums items={this.state.albums} />
      </div>
    );
  }
};

export default Artist;