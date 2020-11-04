import React from 'react';
import { getWeatherIcon, formatDateDMY, celsiusToFahrenheit } from '../lib/util';

const Day = ({ data, celsius }) => {
  let temp_avg = data.temp + '°C';
  let temp_max = data.max_temp + '°C';
  let temp_min = data.min_temp + '°C';

  if (!celsius) {
    temp_avg = celsiusToFahrenheit(data.temp) + '°F';
    temp_max = celsiusToFahrenheit(data.max_temp) + '°F';
    temp_min = celsiusToFahrenheit(data.min_temp) + '°F';
  }

  let icon;
  icon = getWeatherIcon(data.weather.icon);
  icon = require('../assets/images/icons/' + icon).default;

  return (
    <div className='day'>
      <div className='day__date'>{formatDateDMY(data.ts)}</div>
      <div className='day__description'>{data.weather.description}</div>
      <div className='day__icon'>
        <img src={icon} alt={data.weather.description} />
      </div>
      <div className='day__temp-avg'>{temp_avg}</div>
      <div className='day__item-key'>
        Maximum temperature
        <span className='day__item-val'>{temp_max}</span>
      </div>
      <div className='day__item-key'>
        Minimum temperature
        <span className='day__item-val'>{temp_min}</span>
      </div>
      <div className='day__item-key'>
        Pressure
        <span className='day__item-val'>{data.pres} mb</span>
      </div>
      <div className='day__item-key'>
        Humidity
        <span className='day__item-val'>{data.rh} %</span>
      </div>
      <div className='day__item-key'>
        Wind
        <span className='day__item-val'>
          {data.wind_cdir_full}, {data.wind_spd} m/s
        </span>
      </div>
    </div>
  );
};

export default Day;
