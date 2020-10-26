import React from 'react';
import { getWeatherIcon, formatDateDMY, celsiusToFahrenheit } from '../util';

const Day = ({ data, isCelsius }) => {
  let temp_avg = data.temp + '°C';
  let temp_max = data.max_temp + '°C';
  let temp_min = data.min_temp + '°C';

  if (!isCelsius) {
    temp_avg = celsiusToFahrenheit(data.temp) + '°F';
    temp_max = celsiusToFahrenheit(data.max_temp) + '°F';
    temp_min = celsiusToFahrenheit(data.min_temp) + '°F';
  }

  const icon = getWeatherIcon(data.weather.icon);

  return (
    <div className='forecast'>
      <div className='forecast-date'>{formatDateDMY(data.ts)}</div>
      <div className='forecast-description'>{data.weather.description}</div>
      <div className='forecast-img'>
        <img
          src={require('../assets/images/icons/' + icon).default}
          alt={data.weather.description}
        />
      </div>
      <div className='forecast-temp-avg'>{temp_avg}</div>
      <div className='forecast-max-temp-app fl'>
        Maximum temperature <span className='fv'>{temp_max}</span>
      </div>
      <div className='forecast-min-temp-app fl'>
        Minimum temperature <span className='fv'>{temp_min}</span>
      </div>
      <div className='forecast-pres fl'>
        Pressure <span className='fv'>{data.pres} mb</span>
      </div>
      <div className='forecast-rh fl'>
        Humidity <span className='fv'>{data.rh} %</span>
      </div>
      <div className='forecast-wind_spd fl'>
        Wind{' '}
        <span className='fv'>
          {data.wind_cdir_full}, {data.wind_spd} m/s
        </span>
      </div>
    </div>
  );
};

export default Day;
