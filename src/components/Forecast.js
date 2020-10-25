import React from 'react';
import Day from './Day';

const Forecast = ({ forecast, period, isCelsius }) => (
  <div id='forecasts'>
    {forecast.data.slice(0, period).map((data) => (
      <Day key={data.uid} data={data} isCelsius={isCelsius} />
    ))}
  </div>
);

export default Forecast;
