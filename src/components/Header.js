import React, { Component } from 'react';
import Period from './Period';
import Unit from './Unit';
import BtnMenuOpen from './BtnMenuOpen';
import BtnMenuClose from './BtnMenuClose';
import BtnSubmit from './BtnSubmit';
import CityInput from './CityInput';

class Header extends Component {
  state = { city: '' };

  componentDidUpdate(prevProps) {
    const newStatus = prevProps.appStatus !== this.props.appStatus;
    const newStatusIsDone = this.props.appStatus === 'done';
    const city = this.props.city;

    if (newStatus && newStatusIsDone) {
      this.setState({ city });
    }
  }

  setCity = (e) => this.setState({ city: e.target.value });

  submitCity = () => this.props.submitCity(this.state.city);

  openMenu = () => this.props.setMenu(true);

  closeMenu = () => this.props.setMenu(false);

  render() {
    const { city, menu, appStatus, period, celsius } = this.props;
    const classMenu = menu ? 'mainform__options' : 'mainform__options--hide';
    const loading = appStatus === 'loading';
    const cityName = loading ? city : this.state.city;

    return (
      <header className='header'>
        <div className='header__inner'>
          <h1 className='header__title'>Weather forecast</h1>

          <div className='mainform'>
            <BtnMenuOpen onClick={this.openMenu} />

            <div className='mainform__central'>
              <CityInput
                city={cityName}
                setCity={this.setCity}
                submitCity={this.submitCity}
                loading={loading}
              />

              <div className={classMenu}>
                <Period period={period} setPeriod={this.props.setPeriod} />
                <Unit celsius={celsius} setUnit={this.props.setUnit} />
                <BtnMenuClose onClick={this.closeMenu} />
              </div>
            </div>

            <BtnSubmit onClick={this.submitCity} loading={loading} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
