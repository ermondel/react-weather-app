import React, { Component } from 'react'
import Day  from '../day/'
import City from '../city/'

class Forecast extends Component {
    render() {
        const { city, period, isCelsius, forecast, onChangeFavorite } = this.props
        // xxx console.log(forecast);
        const forecasts = forecast.data ? forecast.data.slice(0, period).map(data => (
            <Day key={ data.uid } data={ data } isCelsius={ isCelsius } />
        )): ''

        return (
            <main>
                <div id="main-inner">
                    <City city={ city } onChangeFavorite={ onChangeFavorite } />
                    {forecasts ? <div id="forecasts">{forecasts}</div> : ''}
                </div>
            </main>
        )
    }
}

export default Forecast