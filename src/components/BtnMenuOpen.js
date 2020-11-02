import React from 'react';

const BtnMenuOpen = ({ setMenuVisibility }) => (
  <button
    className='mainform__btn-menu'
    onClick={(event) => {
      event.preventDefault();
      setMenuVisibility(true);
    }}
  >
    <div className='mainform__burger'>
      <div className='mainform__burger__inner'></div>
    </div>
    <span className='visuallyhidden'>Menu</span>
  </button>
);

export default BtnMenuOpen;
