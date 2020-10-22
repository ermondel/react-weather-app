import React, { Component } from 'react';
import Header from './components/header/';
import Forecast from './components/forecast/';
import { API } from './api/weatherbit.api';
import { cityUppercase, cityToLoc, cityFromLoc } from './utils/util';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      period: 3,
      isCelsius: true,
      forecast: {},
      loading: false,
      error: '',
    };

    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    this.onChangePeriod = this.onChangePeriod.bind(this);
    this.onChangeUnit = this.onChangeUnit.bind(this);
    this.onChangeFavorite = this.onChangeFavorite.bind(this);
  }

  onSubmitSearch(event) {
    event.preventDefault();
    this.setState({ city: event.target.elements.city.value, loading: true });
  }

  onChangePeriod(event) {
    this.setState({ period: Number(event.target.value) });
  }

  onChangeUnit(event) {
    this.setState({ isCelsius: event.target.value === 'celsius' ? true : false });
  }

  onChangeFavorite(event) {
    if (event.target.checked) {
      this.onAddFavorite();
    } else {
      this.onDelFavorite();
    }
  }

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
    API.getForecast(city)
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
        let message = '';
        switch (error.message) {
          case 'request':
            message = 'No forecast available.';
            break;
          case 'validate':
            message = 'Invalid city name.';
            break;
          case 'Failed to fetch':
            message = 'Server is not available, please try again later.';
            break;
          default:
            message = 'Unknown error. Notify the administrator.';
            break;
        }
        this.setState({ city, forecast: {}, loading: false, error: message });
      });
  }

  render() {
    const { city, period, isCelsius, forecast, loading, error } = this.state;

    return [
      <Header
        onSubmitSearch={this.onSubmitSearch}
        onChangePeriod={this.onChangePeriod}
        onChangeUnit={this.onChangeUnit}
        city={city}
        period={period}
        isCelsius={isCelsius}
        key={'header'}
      />,
      <Forecast
        onChangeFavorite={this.onChangeFavorite}
        city={city}
        period={period}
        isCelsius={isCelsius}
        forecast={forecast}
        loading={loading}
        error={error}
        key={'forecast'}
      />,
    ];
  }
}

export default App;
