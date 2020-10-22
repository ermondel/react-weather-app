import React from 'react';

const City = (props) => (
  <div id='forecast-header'>
    <label>
      <input
        type='checkbox'
        name='favorite'
        id='favorite'
        onChange={props.onChangeFavorite}
      />
      <span>
        <span>favorite city</span>
      </span>
    </label>
    <h1>{props.city}</h1>
  </div>
);

export default City;
