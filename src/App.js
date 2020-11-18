import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import weatherbit from './lib/weatherbit.api';
import {
  formatCityName,
  setCityToAddressBar,
  getCityFromAddressBar,
  getCityFromLocalStorage,
  setCityToLocalStorage,
  removeCityFromLocalStorage,
} from './lib/util';

class App extends Component {
  state = {
    city: '', // city name
    period: 3, // amount of days: 1 | 3 | 7 | 14
    celsius: true, // units of temperature: true (Celsius) | false (Fahrenheit)
    forecast: null, // obj, doc: www.weatherbit.io/api/weather-forecast-16-day
    status: 'nothing', // app status: nothing | loading | done | error
    error: '', // error message
    favoriteCity: '',
    menu: false, // mobile menu visibility: true | false
  };

  setPeriod = (e) => {
    e.target.blur();

    this.setState({ period: Number(e.target.value) });
  };

  setUnit = (e) => {
    e.target.blur();

    this.setState({ celsius: e.target.value === 'celsius' });
  };

  onChangeFavorite = (event) => {
    if (event.target.checked) {
      if (setCityToLocalStorage(this.state.city)) {
        this.setState({ favoriteCity: this.state.city });
      }
    } else {
      if (removeCityFromLocalStorage()) {
        this.setState({ favoriteCity: '' });
      }
    }
  };

  getForecastByCity = (city) => {
    const success = (forecast) => {
      setCityToAddressBar(forecast.city_name, `Weather: ${forecast.city_name}`);

      document.title = `Weather: ${forecast.city_name}`;

      this.setState({
        status: 'done',
        forecast,
        city: forecast.city_name,
      });
    };

    const error = (error) => {
      document.title = `Weather: error`;

      let message;

      switch (Number(error.message)) {
        case 204:
          message = 'No forecast available';
          break;

        case 600:
          message = 'Invalid city name';
          break;

        default:
          message = 'Server is not available, please try again later';
          break;
      }

      this.setState({
        status: 'error',
        error: message,
        forecast: null,
      });
    };

    weatherbit(city).then(success).catch(error);
  };

  setMenu = (menu) => {
    this.setState({ menu });
  };

  submitCity = (city, isFavorite) => {
    city = formatCityName(city);

    let nextState = {
      status: 'loading',
      error: '',
      city,
    };

    if (isFavorite) {
      nextState.favoriteCity = city;
    }

    this.setState(nextState);

    this.getForecastByCity(city);
  };

  componentDidMount() {
    const cityFromAddressBar = getCityFromAddressBar();
    const cityFromLocalStorage = getCityFromLocalStorage();

    if (cityFromAddressBar) {
      this.submitCity(
        cityFromAddressBar,
        cityFromAddressBar === cityFromLocalStorage
      );
    } else if (cityFromLocalStorage) {
      this.submitCity(cityFromLocalStorage, true);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          appStatus={this.state.status}
          period={this.state.period}
          setPeriod={this.setPeriod}
          celsius={this.state.celsius}
          setUnit={this.setUnit}
          city={this.state.city}
          submitCity={this.submitCity}
          menu={this.state.menu}
          setMenu={this.setMenu}
        />
        <Content
          status={this.state.status}
          error={this.state.error}
          forecast={this.state.forecast}
          period={this.state.period}
          celsius={this.state.celsius}
          onChangeFavorite={this.onChangeFavorite}
          visible={!this.state.menu}
          favoriteCity={this.state.favoriteCity}
        />
      </React.Fragment>
    );
  }
}

export default App;
