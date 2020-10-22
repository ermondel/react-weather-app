import React from 'react';
import Day from './Day';
import City from './City';
import img_loading from '../assets/images/forecast-loading.gif';
import img_error from '../assets/images/forecast-error.jpg';

const Forecast = (props) => {
  let forecasts;

  if (props.forecast.data) {
    forecasts = props.forecast.data
      .slice(0, props.period)
      .map((data) => <Day key={data.uid} data={data} isCelsius={props.isCelsius} />);
  }

  if (props.loading) {
    return (
      <main>
        <div id='main-inner'>
          <div id='forecast-loading'>
            <img src={img_loading} alt='Loading' />
          </div>
        </div>
      </main>
    );
  } else if (forecasts) {
    return (
      <main>
        <div id='main-inner'>
          <City city={props.city} onChangeFavorite={props.onChangeFavorite} />
          <div id='forecasts'>{forecasts}</div>
        </div>
      </main>
    );
  } else if (props.error) {
    return (
      <main>
        <div id='main-inner'>
          <div id='forecast-error'>
            <img src={img_error} alt={props.error} />
            <div>{props.error}</div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div id='main-inner'></div>
      </main>
    );
  }
};

export default Forecast;
