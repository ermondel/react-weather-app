import React from 'react';

const BtnMenuOpen = ({ onClick }) => (
  <button className='mainform__btn-menu' onClick={onClick} tabIndex='0'>
    <div className='mainform__burger'>
      <div className='mainform__burger__inner'></div>
    </div>
    <span className='visuallyhidden'>Menu</span>
  </button>
);

export default BtnMenuOpen;
