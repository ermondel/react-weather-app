import React from 'react';
import SearchIcon from '../assets/images/search.png';

const BtnSubmit = ({ onClick }) => (
  <button className='mainform__btn-submit' tabIndex='0' onClick={onClick}>
    <span className='mainform__search-text'>Search</span>
    <img src={SearchIcon} alt='Search' className='mainform__search-icon' />
  </button>
);

export default BtnSubmit;
