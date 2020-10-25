import React from 'react';
import img from '../assets/images/forecast-loading.gif';

const ProgressBar = () => (
  <div id='forecast-loading'>
    <img src={img} alt='Loading' />
  </div>
);

export default ProgressBar;
