import React from 'react';
import Day from './Day';

const Forecast = ({ forecast, period, isCelsius }) => (
  <div className='forecast'>
    {forecast.data.slice(0, period).map((data) => (
      <Day key={data.uid} data={data} isCelsius={isCelsius} />
    ))}
  </div>
);

export default Forecast;
