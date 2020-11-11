import React from 'react';
import spinner from '../assets/images/spinner.svg';

const ProgressBar = () => (
  <div className='progress-bar'>
    <img src={spinner} alt='Loading...' className='progress-bar__img' />
  </div>
);

export default ProgressBar;
