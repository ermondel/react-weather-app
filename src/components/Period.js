import React from 'react';

const Period = ({ period, setPeriod }) => {
  return (
    <div className='mainform__period'>
      <button
        value='1'
        onClick={setPeriod}
        disabled={period === 1}
        className='mainform__btn-option'
      >
        day
      </button>

      <button
        value='3'
        onClick={setPeriod}
        disabled={period === 3}
        className='mainform__btn-option'
      >
        3 days
      </button>

      <button
        value='7'
        onClick={setPeriod}
        disabled={period === 7}
        className='mainform__btn-option'
      >
        week
      </button>

      <button
        value='14'
        onClick={setPeriod}
        disabled={period === 14}
        className='mainform__btn-option'
      >
        2 weeks
      </button>
    </div>
  );
};

export default Period;
