import React from 'react';

const Unit = ({ celsius, setUnit }) => (
  <div className='mainform__unit'>
    <button value='celsius' onClick={setUnit} disabled={celsius}>
      Celsius
    </button>

    <button value='fahrenheit' onClick={setUnit} disabled={!celsius}>
      Fahrenheit
    </button>
  </div>
);

export default Unit;
