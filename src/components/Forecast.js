import React from 'react';
import Day from './Day';

const Forecast = ({ forecast, period, celsius }) => (
  <div className='forecast'>
    {forecast.data.slice(0, period).map((data) => (
      <Day key={data.uid} data={data} celsius={celsius} />
    ))}
  </div>
);

export default Forecast;
