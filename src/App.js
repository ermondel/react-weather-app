import React, { Component } from 'react'
import Header from './components/header/'
import Forecast from './components/forecast/'
import { API } from './api/weatherbit.api'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: '',
            period: 3,
            isCelsius: true,
            forecast: {},
        }

        this.onSubmitSearch = this.onSubmitSearch.bind(this)
        this.onChangePeriod = this.onChangePeriod.bind(this)
        this.onChangeUnit   = this.onChangeUnit.bind(this)
    }

    onSubmitSearch(event) {
        event.preventDefault()
        this.setState({ city: event.target.elements.city.value })
    }

    onChangePeriod(event) {
        this.setState({ period: Number(event.target.value) })
    }

    onChangeUnit(event) {
        this.setState({ isCelsius: event.target.value === 'celsius' ? true : false })
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.city && nextState.city !== this.state.city) this.forecast(nextState.city)
    }

    forecast(city) {
        API.getForecast(city).then(forecast => {
            this.setState({ forecast })
        }).catch(error => {
            console.log('NO', error)
        })
    }

    render() {
        return [
            <Header
                onSubmitSearch={ this.onSubmitSearch }
                onChangePeriod={ this.onChangePeriod }
                onChangeUnit={ this.onChangeUnit }
                city={ this.state.city }
                period={ this.state.period }
                isCelsius={ this.state.isCelsius }
                key={ 'header' }
            />,
            <Forecast 
                forecast={ this.state.forecast } 
                isCelsius={ this.state.isCelsius } 
                key={ 'forecast' } 
            />
        ]
    }
}

export default App