import React from 'react';
import AlbumTracklistItem from './albumTracklistItem';

const AlbumTracklist = (props) => {
  let items;

  if (props.items) {
    items = props.items.map((item, index) => 
      <AlbumTracklistItem item={item} index={index} key={index} />
    );
  }

  return (
    <div className='card album-tracks' style={{width: 32+'rem'}}>
      <div className='card-header'>
        <h2>Album Tracks</h2>
      </div>
      <ul className='list-group list-group-flush'>
        {items ? items : 'No Tracks'}
      </ul>
    </div>
  );
};

export default AlbumTracklist;