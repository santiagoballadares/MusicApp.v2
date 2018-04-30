import axios from 'axios';

const apiRoot = 'https://api.deezer.com';
const proxyUrl = 'https://cors-anywhere.herokuapp.com';

class DeezerApi {
  static search = (searchText) => {
    const searchUrl = `${proxyUrl}/${apiRoot}/search/artist?q=${searchText}`;
    return axios.get(searchUrl);
  }

  static getArtist(id) {
    let artistUrl = `${proxyUrl}/${apiRoot}/artist/${id}`;
    return axios.get(artistUrl);
  }

  static getAlbums(artistId) {
    let albumsUrl = `${proxyUrl}/${apiRoot}/artist/${artistId}/albums`;
    return axios.get(albumsUrl);
  }
  
  static getAlbum(id) {
    let albumUrl = `${proxyUrl}/${apiRoot}/album/${id}`;
    return axios.get(albumUrl);
  }

  static getGenre(id) {
    let genreUrl = `${proxyUrl}/${apiRoot}/genre/${id}`;
    return axios.get(genreUrl);
  }
};

export default DeezerApi;