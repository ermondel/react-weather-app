import React from 'react';
import img from '../assets/images/forecast-error.jpg';

const ErrorMessage = ({ error }) => (
  <div id='forecast-error'>
    <img src={img} alt={error} />

    <p>{error}</p>
  </div>
);

export default ErrorMessage;
