import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = (props) => {
  let items = [];

  if (props.result) {
    items = props.result.map(item => resultRow(item));
  }

  return (
    <div className="container">
      {items}
    </div>
  );
}

const resultRow = (item) => {
  return (
    <div className='card' key={item.id}>
      <div className='cardBody'>
        <div className='row'>
          <div className='col-sm-1'>
            <img src={item.picture_small} alt={item.name} />
          </div>
          <div className='col-sm-11'>
            <h4><Link to={`/artist/${item.id}`}>{item.name}</Link></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;