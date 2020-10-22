import React from 'react';
import { filesManyToOne, D_Month_Y, CelsiusToFahrenheit } from '../utils/util';

const Day = (props) => {
  const { data, isCelsius } = props;

  const weather_icons_map = {
    'ico-01': 'c01d',
    'ico-03': 'c04d',
    'ico-02': 'c03d;c02d;c02d',
    'ico-04': 'a06d;a05d;a04d;a03d;a02d;a01d',
    'ico-06': 't05d;t04d;t04d;t04d;t03d;t02d;t01d',
    'ico-05': 'u00d;r06d;r05d;r04d;f01d;r03d;r02d;r01d',
    'ico-07': 's06d;s02d;s01d;s05d;s05d;s04d;s03d;s02d;s01d;d03d;d02d;d01d',
  };

  let temp_avg = data.temp + '°C';
  let temp_max = data.max_temp + '°C';
  let temp_min = data.min_temp + '°C';

  if (!isCelsius) {
    temp_avg = CelsiusToFahrenheit(data.temp) + '°F';
    temp_max = CelsiusToFahrenheit(data.max_temp) + '°F';
    temp_min = CelsiusToFahrenheit(data.min_temp) + '°F';
  }

  const icon = filesManyToOne(data.weather.icon, weather_icons_map) + '.png';

  return (
    <div className='forecast'>
      <div className='forecast-date'>{D_Month_Y(data.ts)}</div>
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
