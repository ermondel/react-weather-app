import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import weatherbit from './lib/weatherbit.api';
import {
  formatCityName,
  setCityToAddressBar,
  getCityFromAddressBar,
} from './lib/util';

class App extends Component {
  state = {
    city: '',
    period: 3,
    celsius: true,
    forecast: null, // object (see api doc)
    status: 'nothing', // nothing || loading || done || error
    error: '',
    visible: true,
    favoriteCity: '',
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
    if (window.localStorage) {
      const storageKey = 'react-weather-app_favorite-city';

      if (event.target.checked) {
        window.localStorage.setItem(storageKey, this.state.city);

        this.setState({ favoriteCity: this.state.city });
      } else {
        window.localStorage.removeItem(storageKey);

        this.setState({ favoriteCity: '' });
      }
    }
  };

  getForecastByCity = (city) => {
    const success = (forecast) => {
      setCityToAddressBar(city, `Weather: ${city}`);

      document.title = `Weather: ${city}`;

      this.setState({
        status: 'done',
        forecast,
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

  setContentVisibility = (visible) => {
    this.setState({ visible });
  };

  submitCity = (city, isFavorite) => {
    city = formatCityName(city);

    let nextState = {
      status: 'loading',
      error: '',
      city,
    };

    if (isFavorite) nextState.favoriteCity = city;

    this.setState(nextState);

    this.getForecastByCity(city);
  };

  componentDidMount() {
    let parameter = getCityFromAddressBar();
    let storage = '';

    if (window.localStorage) {
      const storageKey = 'react-weather-app_favorite-city';
      storage = window.localStorage.getItem(storageKey);
    }

    if (parameter) {
      this.submitCity(parameter, parameter === storage);
    } else if (storage) {
      this.submitCity(storage, true);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          city={this.state.city}
          period={this.state.period}
          setPeriod={this.setPeriod}
          celsius={this.state.celsius}
          setUnit={this.setUnit}
          submitCity={this.submitCity}
          appStatus={this.state.status}
          setContentVisibility={this.setContentVisibility}
        />
        <Content
          status={this.state.status}
          error={this.state.error}
          forecast={this.state.forecast}
          period={this.state.period}
          celsius={this.state.celsius}
          onChangeFavorite={this.onChangeFavorite}
          visible={this.state.visible}
          favoriteCity={this.state.favoriteCity}
        />
      </React.Fragment>
    );
  }
}

export default App;
