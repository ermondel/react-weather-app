import React from 'react';

const SearchForm = ({ city, setCity }) => (
  <div id='search-box'>
    <label htmlFor='city' className='visuallyhidden' tabIndex='0'>
      Choose the city of your interest
    </label>

    <input
      type='text'
      name='city'
      id='city'
      value={city}
      placeholder='e.g. New York'
      onChange={setCity}
      required
      tabIndex='0'
    />
  </div>
);

export default SearchForm;
