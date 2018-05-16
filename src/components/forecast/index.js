import React, { Component } from 'react'
import Day  from '../day/'
import City from '../city/'
import img_loading from '../../style/img/forecast-loading.gif';

class Forecast extends Component {
    render() {
        const { city, period, isCelsius, forecast, loading, onChangeFavorite } = this.props

        const forecasts = forecast.data ? forecast.data.slice(0, period).map(data => (
            <Day key={ data.uid } data={ data } isCelsius={ isCelsius } />
        )): ''

        if (loading) {
            return (
                <main>
                    <div id="main-inner">
                        <div id="forecast-loading">
                            <img src={ img_loading } alt="Loading" />
                        </div>
                    </div>
                </main>
            )
        } else if (forecasts) {
            return (
                <main>
                    <div id="main-inner">
                        <City city={ city } onChangeFavorite={ onChangeFavorite } />
                        <div id="forecasts">{forecasts}</div>
                    </div>
                </main>
            )
        } else {
            return (
                <main>
                    <div id="main-inner">
                    </div>
                </main>
            )
        }
    }
}

export default Forecast