import React from 'react';
import IconLoading from './IconLoading';
import IconSearch from './IconSearch';

const BtnSubmit = ({ onClick, loading }) => {
  const onBtnClick = (event) => {
    event.currentTarget.blur();
    onClick();
  };

  return (
    <button
      tabIndex='0'
      onClick={onBtnClick}
      disabled={loading}
      className='mainform__btn-submit'
    >
      <span className='mainform__search-text'>
        {loading ? 'loading...' : 'Search'}
      </span>
      <span className='mainform__search-icon'>
        {loading ? <IconLoading /> : <IconSearch />}
      </span>
    </button>
  );
};

export default BtnSubmit;
