import React from 'react';
import { getWeatherIcon, formatDate, celsiusToFahrenheit } from '../lib/util';

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
      <div className='day__date'>
        <div className='day__date-full'>{formatDate(data.ts, 'D Month')}</div>
        <div className='day__date-day'>{formatDate(data.ts, 'Day')}</div>
      </div>

      <div className='day__icon'>
        <img src={icon} alt={data.weather.description} className='day__img' />
      </div>

      <div className='day__temp-avg'>{temp_avg}</div>

      <div className='day__description'>{data.weather.description}</div>

      <div className='day__item'>
        <div className='day__item-key'>Maximum temperature</div>
        <div className='day__item-val'>{temp_max}</div>
      </div>

      <div className='day__item'>
        <div className='day__item-key'>Minimum temperature</div>
        <div className='day__item-val'>{temp_min}</div>
      </div>

      <div className='day__item'>
        <div className='day__item-key'>Pressure</div>
        <div className='day__item-val'>{data.pres} mb</div>
      </div>

      <div className='day__item'>
        <div className='day__item-key'>Humidity</div>
        <div className='day__item-val'>{data.rh} %</div>
      </div>

      <div className='day__item'>
        <div className='day__item-key'>Wind</div>
        <div className='day__item-val'>
          {data.wind_cdir_full}, {data.wind_spd} m/s
        </div>
      </div>
    </div>
  );
};

export default Day;
