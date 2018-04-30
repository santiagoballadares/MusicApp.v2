import React from 'react';
import AlbumItem from './albumItem'

const Albums = (props) => {
  let items;

  if (props.items) {
    items = props.items.map(item => 
      <AlbumItem item={item} key={item.id} />
    );
  }

  return (
    <div className='row artist-albums'>
      {items ? items : 'No Albums'}
    </div>
  );
};

export default Albums;