import React from 'react';

const BtnMenuClose = ({ onClick }) => (
  <div className='mainform__actions'>
    <button className='mainform__btn-close' onClick={onClick} tabIndex='0'>
      Close menu
    </button>
  </div>
);

export default BtnMenuClose;
