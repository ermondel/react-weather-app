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
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__title'>
          Weather forecast for the city up to 2 weeks
        </h1>

        <form id='form' className='search' onSubmit={onSubmit}>
          <div className='search__main'>
            <SearchForm city={city} setCity={setCity} />

            <div className='options'>
              <div className='options__period'>
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
                  text='2 weeks'
                  checked={period === 14}
                  onChange={setPeriod}
                />
              </div>
              <div className='options__unit'>
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

          <div className='search__btn'>
            <input
              type='submit'
              value='Search'
              className='search__btn-submit'
              tabIndex='0'
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
