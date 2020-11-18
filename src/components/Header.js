import React, { useState } from 'react';
import Period from './Period';
import Unit from './Unit';
import BtnMenuOpen from './BtnMenuOpen';
import BtnMenuClose from './BtnMenuClose';
import BtnSubmit from './BtnSubmit';
import CityInput from './CityInput';

const Header = (props) => {
  const [city, setCity] = useState(undefined);
  const classMenu = props.menu ? 'mainform__options' : 'mainform__options--hide';

  const submitCity = () => {
    props.submitCity(city === undefined ? props.city : city);
  };

  return (
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__title'>Weather forecast</h1>

        <div className='mainform'>
          <BtnMenuOpen onClick={() => props.setMenu(true)} />

          <div className='mainform__central'>
            <CityInput
              city={city === undefined ? props.city : city}
              setCity={setCity}
              submitCity={submitCity}
              loading={props.appStatus === 'loading'}
            />

            <div className={classMenu}>
              <Period period={props.period} setPeriod={props.setPeriod} />
              <Unit celsius={props.celsius} setUnit={props.setUnit} />
              <BtnMenuClose onClick={() => props.setMenu(false)} />
            </div>
          </div>

          <BtnSubmit onClick={submitCity} loading={props.appStatus === 'loading'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
