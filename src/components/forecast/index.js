import React, { Component } from 'react';
import Day from '../day/';
import City from '../city/';
import img_loading from '../../assets/images/forecast-loading.gif';
import img_error from '../../assets/images/forecast-error.jpg';

class Forecast extends Component {
  render() {
    const {
      city,
      period,
      isCelsius,
      forecast,
      loading,
      error,
      onChangeFavorite,
    } = this.props;

    const forecasts = forecast.data
      ? forecast.data
          .slice(0, period)
          .map((data) => <Day key={data.uid} data={data} isCelsius={isCelsius} />)
      : '';

    if (loading) {
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
            <City city={city} onChangeFavorite={onChangeFavorite} />
            <div id='forecasts'>{forecasts}</div>
          </div>
        </main>
      );
    } else if (error) {
      return (
        <main>
          <div id='main-inner'>
            <div id='forecast-error'>
              <img src={img_error} alt={error} />
              <div>{error}</div>
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
  }
}

export default Forecast;
