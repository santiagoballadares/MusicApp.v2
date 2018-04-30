import React, { Component } from 'react';
import DeezerApi from '../../services/api/dezzerApi';
import AlbumHeader from './components/albumHeader';
import AlbumTracklist from './components/albumTracklist';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      album: {
        title: '',
        link: '',
        release_date: '',
        cover_big: '',
        artist: { name: '' },
        tracks: { data: [] }
      }
    };
    const { match: { params } } = this.props;
    this.state.id = params.id;
  }

  componentDidMount() {
    this.getAlbum();
  }

  getAlbum() {
    DeezerApi.getAlbum(this.state.id)
    .then(res => {
      this.setState(
        { album: res.data || {} },
        () => console.log('Done retrieving album. ' + JSON.stringify(res))
      );
    })
    .catch(err => console.log('Error retrieving album: ' + JSON.stringify(err)));
  }

  render() {
    return (
      <div id='album'>
        <AlbumHeader album={this.state.album} />
        <br />
        <AlbumTracklist items={this.state.album.tracks.data} />
      </div>
    );
  }
};

export default Album;