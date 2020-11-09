import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className='error-message'>
    <p className='error-message__message'>{error}</p>
  </div>
);

export default ErrorMessage;
