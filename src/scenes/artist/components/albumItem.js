import React from 'react';
import { Link } from 'react-router-dom';

const AlbumItem = (props) => {
  const item = props.item;
  return (
    <div className='col-md-6'>
      <div className='card album'>
        <div className='cardBody'>
          <img className='album-thumb img-thumbnail' src={item.cover_big} alt={item.title} />
          <h4>{item.title}</h4>
          <Link className='btn btn-secondary btn-block' to={`/album/${item.id}`}>Album details</Link>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;