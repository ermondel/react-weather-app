import React, { Component } from 'react'
import Day from '../day/'

class Forecast extends Component {
    render() {
        const { forecast, isCelsius } = this.props
        // xxx console.log(forecast);
        const forecasts = forecast.data ? forecast.data.map(data => (
            <Day key={ data.uid } data={ data } isCelsius={ isCelsius } />
        )): ''

        return (
            <main>
                <div id="main-inner">
                    {forecasts ? <div id="forecasts">{forecasts}</div> : ''}
                </div>
            </main>
        )
    }
}

export default Forecast