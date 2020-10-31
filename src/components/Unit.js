import React from 'react';
import Option from './Option';

const Unit = ({ celsius, setUnit }) => (
  <div className='mainform__unit'>
    <Option
      name='unit'
      val='celsius'
      text='Celsius'
      checked={celsius}
      onChange={setUnit}
    />
    <Option
      name='unit'
      val='fahrenheit'
      text='Fahrenheit'
      checked={!celsius}
      onChange={setUnit}
    />
  </div>
);

export default Unit;
