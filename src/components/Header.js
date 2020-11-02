import React, { useState } from 'react';
import Period from './Period';
import Unit from './Unit';
import BtnMenuOpen from './BtnMenuOpen';
import BtnMenuClose from './BtnMenuClose';

const Header = (props) => {
  const [menuVisibility, setMenuVisibility] = useState(true);

  const { city, period, isCelsius, setCity, setPeriod, setUnit, submitCity } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submitCity(city);
  };

  let menuClass = 'mainform__options';
  if (!menuVisibility) menuClass += '--hide';

  return (
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__title'>Weather forecast</h1>

        <form id='form' className='mainform' onSubmit={onSubmit}>
          <div className='mainform__head'>
            <BtnMenuOpen setMenuVisibility={setMenuVisibility} />

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

              <div className={menuClass}>
                <Period period={period} setPeriod={setPeriod} />
                <Unit celsius={isCelsius} setUnit={setUnit} />
                <BtnMenuClose setMenuVisibility={setMenuVisibility} />
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
