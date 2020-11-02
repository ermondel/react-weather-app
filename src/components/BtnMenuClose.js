import React from 'react';

const BtnMenuClose = ({ setMenuVisibility }) => (
  <div className='mainform__actions'>
    <button
      className='mainform__btn-close'
      onClick={(event) => {
        event.preventDefault();
        setMenuVisibility(false);
      }}
    >
      Close
    </button>
  </div>
);

export default BtnMenuClose;
