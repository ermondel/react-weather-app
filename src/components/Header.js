import React from 'react';
import SearchForm from './SearchForm';
import Trigger from './Trigger';

const Header = (props) => {
  const { city, period, isCelsius, setCity, setPeriod, setUnit, submitCity } = props;

  const onSubmit = (event) => {
    event.preventDefault();

    submitCity(city);
  };

  return (
    <header>
      <div id='header-inner'>
        <h1>Weather forecast for the city up to 2 weeks</h1>

        <form id='form' onSubmit={onSubmit}>
          <div className='left'>
            <SearchForm city={city} setCity={setCity} />

            <div id='options'>
              <div id='options-period'>
                <Trigger
                  name='period'
                  val='1'
                  text='day'
                  checked={period === 1}
                  onChange={setPeriod}
                />
                <Trigger
                  name='period'
                  val='3'
                  text='3 days'
                  checked={period === 3}
                  onChange={setPeriod}
                />
                <Trigger
                  name='period'
                  val='7'
                  text='week'
                  checked={period === 7}
                  onChange={setPeriod}
                />
                <Trigger
                  name='period'
                  val='14'
                  text='week'
                  checked={period === 14}
                  onChange={setPeriod}
                />
              </div>
              <div id='options-unit'>
                <Trigger
                  name='unit'
                  val='celsius'
                  text='Celsius'
                  checked={isCelsius}
                  onChange={setUnit}
                />
                <Trigger
                  name='unit'
                  val='fahrenheit'
                  text='Fahrenheit'
                  checked={!isCelsius}
                  onChange={setUnit}
                />
              </div>
            </div>
          </div>

          <div className='right'>
            <input type='submit' value='Search' id='submit' tabIndex='0' />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
