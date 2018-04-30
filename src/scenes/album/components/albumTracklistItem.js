import React from 'react';

const AlbumTracklistItem = (props) => {
  const item = props.item;
  const index = props.index;
  return (
    <li className='list-group-item'>
      <h5>{index + 1}. {item.title}</h5>
      <a href={item.preview} target='_black'>Preview Track</a>
    </li>
  );
};

export default AlbumTracklistItem;