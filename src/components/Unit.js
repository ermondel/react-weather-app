import React from 'react';

const Unit = ({ celsius, setUnit }) => (
  <div className='mainform__unit'>
    <button
      value='celsius'
      onClick={setUnit}
      disabled={celsius}
      className='mainform__btn-option'
    >
      Celsius
    </button>

    <button
      value='fahrenheit'
      onClick={setUnit}
      disabled={!celsius}
      className='mainform__btn-option'
    >
      Fahrenheit
    </button>
  </div>
);

export default Unit;
