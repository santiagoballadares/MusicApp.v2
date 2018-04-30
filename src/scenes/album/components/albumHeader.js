import React from 'react';

const AlbumHeader = (props) => {
  const album = props.album;
  return (
    <header className='album-header'>
      <div className='row'>
        <div className='col-md-4'>
          <img className='album-thumb' src={album.cover_big} alt={album.title} />
        </div>
        <div className='col-md-8'>
          <h4><span>{album.artist.name}</span></h4>
          <h2>{album.title}</h2>
          <h5>Release Date: {album.release_date}</h5>
          <a className='btn btn-primary' href={album.link} target='_black'>View in Deezer</a>
        </div>
      </div>
    </header>
  );
};

export default AlbumHeader;