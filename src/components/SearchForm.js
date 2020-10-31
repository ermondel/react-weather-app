import React from 'react';

const SearchForm = ({ city, setCity }) => (
  <input
    type='text'
    className='mainform__search'
    value={city}
    placeholder='e.g. New York'
    onChange={setCity}
    required
    tabIndex='0'
  />
);

export default SearchForm;
