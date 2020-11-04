import React from 'react';

const CityInput = ({ city, setCity, submitCity }) => (
  <input
    type='text'
    placeholder='e.g. New York'
    className='mainform__input'
    value={city}
    tabIndex='0'
    onChange={(event) => {
      setCity(event.target.value);
    }}
    onKeyDown={(event) => {
      if (event.key === 'Enter') submitCity();
    }}
  />
);

export default CityInput;
