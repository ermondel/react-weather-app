import React, { useState } from 'react';
import Period from './Period';
import Unit from './Unit';
import BtnMenuOpen from './BtnMenuOpen';
import BtnMenuClose from './BtnMenuClose';
import BtnSubmit from './BtnSubmit';
import CityInput from './CityInput';

const Header = (props) => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [city, setCity] = useState(undefined);

  let menuClass = 'mainform__options';
  if (!menuVisibility) menuClass += '--hide';

  const submitCity = () => props.submitCity(city);

  const openMenu = () => {
    setMenuVisibility(true);
    props.setContentVisibility(false);
  };

  const closeMenu = () => {
    setMenuVisibility(false);
    props.setContentVisibility(true);
  };

  return (
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__title'>Weather forecast</h1>

        <div className='mainform'>
          <BtnMenuOpen onClick={openMenu} />

          <div className='mainform__central'>
            <CityInput
              city={city === undefined ? props.city : city}
              setCity={setCity}
              submitCity={submitCity}
              loading={props.appStatus === 'loading'}
            />

            <div className={menuClass}>
              <Period period={props.period} setPeriod={props.setPeriod} />
              <Unit celsius={props.celsius} setUnit={props.setUnit} />
              <BtnMenuClose onClick={closeMenu} />
            </div>
          </div>

          <BtnSubmit onClick={submitCity} loading={props.appStatus === 'loading'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
