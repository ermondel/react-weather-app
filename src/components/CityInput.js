import React from 'react';

const CityInput = ({ city, setCity, submitCity, loading }) => (
  <input
    type='text'
    value={city + (loading ? '...' : '')}
    tabIndex='0'
    disabled={loading}
    placeholder='e.g. New York'
    className='mainform__input'
    onChange={setCity}
    onKeyDown={(event) => event.key === 'Enter' && submitCity()}
  />
);

export default CityInput;
