import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: props.city,
    };

    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ city: nextProps.city });
  }

  render() {
    const { onSubmitSearch, onChangePeriod, onChangeUnit } = this.props;
    const { period, isCelsius } = this.props;
    const { city } = this.state;

    return (
      <header>
        <div id='header-inner'>
          <h1>Weather forecast for the city up to 2 weeks</h1>
          <form id='form' onSubmit={onSubmitSearch}>
            <div className='left'>
              <div id='search-box'>
                <label htmlFor='city' className='visuallyhidden' tabIndex='0'>
                  Choose the city of your interest
                </label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  value={city}
                  placeholder='e.g. New York'
                  onChange={this.handleCityChange}
                  required
                />
              </div>
              <div id='options'>
                <div id='options-period'>
                  <label className='common-radio' tabIndex='0'>
                    <input
                      type='radio'
                      name='period'
                      value='1'
                      required
                      checked={period === 1}
                      onChange={onChangePeriod}
                    />
                    <span>day</span>
                  </label>
                  <label className='common-radio' tabIndex='0'>
                    <input
                      type='radio'
                      name='period'
                      value='3'
                      required
                      checked={period === 3}
                      onChange={onChangePeriod}
                    />
                    <span>3 days</span>
                  </label>
                  <label className='common-radio' tabIndex='0'>
                    <input
                      type='radio'
                      name='period'
                      value='7'
                      required
                      checked={period === 7}
                      onChange={onChangePeriod}
                    />
                    <span>week</span>
                  </label>
                  <label className='common-radio' tabIndex='0'>
                    <input
                      type='radio'
                      name='period'
                      value='14'
                      required
                      checked={period === 14}
                      onChange={onChangePeriod}
                    />
                    <span>2 weeks</span>
                  </label>
                </div>
                <div id='options-unit'>
                  <label className='common-radio' tabIndex='0'>
                    <input
                      type='radio'
                      name='unit'
                      value='celsius'
                      required
                      checked={isCelsius}
                      onChange={onChangeUnit}
                    />
                    <span>Celsius</span>
                  </label>
                  <label className='common-radio' tabIndex='0'>
                    <input
                      type='radio'
                      name='unit'
                      value='fahrenheit'
                      required
                      checked={!isCelsius}
                      onChange={onChangeUnit}
                    />
                    <span>Fahrenheit</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='right'>
              <input type='submit' value='Submit' id='submit' tabIndex='0' />
            </div>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
