import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className='error'>
    <p className='error__message'>{error}</p>
  </div>
);

export default ErrorMessage;
