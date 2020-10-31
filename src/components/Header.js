import React from 'react';
import Period from './Period';
import Unit from './Unit';

const Header = (props) => {
  const { city, period, isCelsius, setCity, setPeriod, setUnit, submitCity } = props;

  const onSubmit = (event) => {
    event.preventDefault();

    submitCity(city);
  };

  return (
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__title'>Weather forecast</h1>

        <form id='form' className='mainform' onSubmit={onSubmit}>
          <div className='mainform__head'>
            <button className='mainform__btn-menu'>
              <div className='mainform__burger'>
                <div className='mainform__burger__inner'></div>
              </div>
              <span className='visuallyhidden'>Menu</span>
            </button>

            <div className='mainform__central'>
              <input
                type='text'
                className='mainform__input'
                value={city}
                placeholder='e.g. New York'
                onChange={setCity}
                required
                tabIndex='0'
              />

              <div className='mainform__options'>
                <Period period={period} setPeriod={setPeriod} />
                <Unit celsius={isCelsius} setUnit={setUnit} />
                <div className='mainform__actions'>
                  <button className='mainform__btn-close'>Close</button>
                </div>
              </div>
            </div>

            <button className='mainform__btn-submit'>
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
