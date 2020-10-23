import React, { Component } from 'react';
import Header from './components/Header';
import Forecast from './components/Forecast';
import weatherbit from './api/weatherbit';
import { cityUppercase, cityToLoc, cityFromLoc } from './utils/util';

class App extends Component {
  state = {
    city: '',
    period: 3,
    isCelsius: true,
    forecast: {},
    loading: false,
    error: '',
  };

  onSubmitSearch = (event) => {
    event.preventDefault();
    this.setState({ city: event.target.elements.city.value, loading: true });
  };

  onChangePeriod = (event) => {
    this.setState({ period: Number(event.target.value) });
  };

  onChangeUnit = (event) => {
    this.setState({ isCelsius: event.target.value === 'celsius' ? true : false });
  };

  onChangeFavorite = (event) => {
    if (event.target.checked) {
      this.onAddFavorite();
    } else {
      this.onDelFavorite();
    }
  };

  onAddFavorite() {
    console.log('---', 'onAddFavorite');
  }

  onDelFavorite() {
    console.log('---', 'onDelFavorite');
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.state.loading) this.forecast(this.state.city);
  }

  componentDidMount() {
    const city = cityFromLoc();
    if (city) this.forecast(city);
  }

  forecast(city) {
    weatherbit(city)
      .then((forecast) => {
        cityToLoc(city, `Weather app :: forecast for ${city}`);
        document.title = `Forecast for ${city}`;

        this.setState({
          city: cityUppercase(city),
          forecast,
          loading: false,
          error: '',
        });
      })
      .catch((error) => {
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

        this.setState({ city, forecast: {}, loading: false, error: message });
      });
  }

  render() {
    return [
      <Header
        onSubmitSearch={this.onSubmitSearch}
        onChangePeriod={this.onChangePeriod}
        onChangeUnit={this.onChangeUnit}
        city={this.state.city}
        period={this.state.period}
        isCelsius={this.state.isCelsius}
        key={'header'}
      />,
      <Forecast
        onChangeFavorite={this.onChangeFavorite}
        city={this.state.city}
        period={this.state.period}
        isCelsius={this.state.isCelsius}
        forecast={this.state.forecast}
        loading={this.state.loading}
        error={this.state.error}
        key={'forecast'}
      />,
    ];
  }
}

export default App;
