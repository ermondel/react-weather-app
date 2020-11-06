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
  };

  setPeriod = (e) => this.setState({ period: Number(e.target.value) });

  setUnit = (e) => this.setState({ celsius: e.target.value === 'celsius' });

  onChangeFavorite = (event) => {
    if (event.target.checked) {
      console.log('---', 'onAddFavorite');
    } else {
      console.log('---', 'onDelFavorite');
    }
  };

  componentDidMount() {
    const city = getCityFromAddressBar();

    if (city) {
      this.getForecastByCity(city);
    }
  }

  getForecastByCity = (city) => {
    city = formatCityName(city);

    this.setState({
      status: 'loading',
      error: '',
      city,
    });

    const success = (forecast) => {
      setCityToAddressBar(city, `Weather: ${city}`);

      document.title = `Weather: ${city}`;

      this.setState({
        status: 'done',
        forecast,
      });
    };

    const error = (error) => {
      setCityToAddressBar(city, `Weather: error`);

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

  render() {
    return (
      <React.Fragment>
        <Header
          city={this.state.city}
          period={this.state.period}
          setPeriod={this.setPeriod}
          celsius={this.state.celsius}
          setUnit={this.setUnit}
          submitCity={this.getForecastByCity}
          appStatus={this.state.status}
        />
        <Content
          status={this.state.status}
          error={this.state.error}
          forecast={this.state.forecast}
          period={this.state.period}
          celsius={this.state.celsius}
          onChangeFavorite={this.onChangeFavorite}
        />
      </React.Fragment>
    );
  }
}

export default App;
