import React from 'react';
import IconLoading from './IconLoading';
import IconSearch from './IconSearch';

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
      <span className='mainform__search-icon'>
        {loading ? <IconLoading /> : <IconSearch />}
      </span>
    </button>
  );
};

export default BtnSubmit;
