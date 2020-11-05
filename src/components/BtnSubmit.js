import React from 'react';
import SearchIcon from '../assets/images/search.png';
import LoadingIcon from '../assets/images/loading.png';

const BtnSubmit = ({ onClick, loading }) => {
  const text = loading ? 'loading...' : 'Search';

  return (
    <button
      tabIndex='0'
      onClick={onClick}
      disabled={loading}
      className='mainform__btn-submit'
    >
      <span className='mainform__search-text'>{text}</span>
      <img
        src={loading ? LoadingIcon : SearchIcon}
        alt={text}
        className='mainform__search-icon'
      />
    </button>
  );
};

export default BtnSubmit;
