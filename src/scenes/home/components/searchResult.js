import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = (props) => {
  let items = [];

  if (props.result) {
    items = props.result.map(item => resultRow(item));
  }

  return (
    <div>
      {items}
    </div>
  );
}

const resultRow = (item) => {
  return (
    <div className='row' key={item.id}>
      <div className='col-md-12'>
        <div className='card'>
          <div className='cardBody'>
            <h4><Link to={`/artist/${item.id}`}>{item.name}</Link></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;