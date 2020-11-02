import React from 'react';

const Period = ({ period, setPeriod }) => {
  return (
    <div className='mainform__period'>
      <button value='1' onClick={setPeriod} disabled={period === 1}>
        day
      </button>

      <button value='3' onClick={setPeriod} disabled={period === 3}>
        3 days
      </button>

      <button value='7' onClick={setPeriod} disabled={period === 7}>
        week
      </button>

      <button value='14' onClick={setPeriod} disabled={period === 14}>
        2 weeks
      </button>
    </div>
  );
};

export default Period;
