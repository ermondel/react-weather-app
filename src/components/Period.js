import React from 'react';
import Option from './Option';

const Period = ({ period, setPeriod }) => (
  <div className='mainform__period'>
    <Option
      name='period'
      val='1'
      text='day'
      checked={period === 1}
      onChange={setPeriod}
    />
    <Option
      name='period'
      val='3'
      text='3 days'
      checked={period === 3}
      onChange={setPeriod}
    />
    <Option
      name='period'
      val='7'
      text='week'
      checked={period === 7}
      onChange={setPeriod}
    />
    <Option
      name='period'
      val='14'
      text='2 weeks'
      checked={period === 14}
      onChange={setPeriod}
    />
  </div>
);

export default Period;
