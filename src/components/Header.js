import React, { useState } from 'react';
import Period from './Period';
import Unit from './Unit';
import BtnMenuOpen from './BtnMenuOpen';
import BtnMenuClose from './BtnMenuClose';
import BtnSubmit from './BtnSubmit';
import CityInput from './CityInput';

const Header = (props) => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [city, setCity] = useState('');

  let menuClass = 'mainform__options';
  if (!menuVisibility) menuClass += '--hide';

  const submitCity = () => props.submitCity(city);
  const openMenu = () => setMenuVisibility(true);
  const closeMenu = () => setMenuVisibility(false);

  return (
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__title'>Weather forecast</h1>

        <div className='mainform'>
          <BtnMenuOpen onClick={openMenu} />

          <div className='mainform__central'>
            <CityInput city={city} setCity={setCity} submitCity={submitCity} />

            <div className={menuClass}>
              <Period period={props.period} setPeriod={props.setPeriod} />
              <Unit celsius={props.celsius} setUnit={props.setUnit} />
              <BtnMenuClose onClick={closeMenu} />
            </div>
          </div>

          <BtnSubmit onClick={submitCity} />
        </div>
      </div>
    </header>
  );
};

export default Header;
