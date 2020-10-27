import React from 'react';

const City = (props) => (
  <div className='city-name'>
    <label className='city-name__favorite'>
      <input
        type='checkbox'
        name='favorite'
        className='city-name__checkbox'
        onChange={props.onChangeFavorite}
      />
      <span className='city-name__value'>
        <span className='city-name__value__inner'>favorite city</span>
      </span>
    </label>
    <h1 className='city-name__title'>{props.city}</h1>
  </div>
);

export default City;
