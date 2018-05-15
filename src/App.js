import React, { Component } from 'react'
import Header   from './components/header/'
import Forecast from './components/forecast/'
import { API }  from './api/weatherbit.api'
import { cityUppercase } from './utils/util'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city      : '',
            period    : 3,
            isCelsius : true,
            forecast  : {},
        }

        this.onSubmitSearch   = this.onSubmitSearch.bind(this)
        this.onChangePeriod   = this.onChangePeriod.bind(this)
        this.onChangeUnit     = this.onChangeUnit.bind(this)
        this.onChangeFavorite = this.onChangeFavorite.bind(this)
    }

    onSubmitSearch(event) {
        event.preventDefault()
        this.setState({ city: cityUppercase(event.target.elements.city.value) })
    }

    onChangePeriod(event) {
        this.setState({ period: Number(event.target.value) })
    }

    onChangeUnit(event) {
        this.setState({ isCelsius: event.target.value === 'celsius' ? true : false })
    }

    onChangeFavorite(event) {
        if (event.target.checked) {
            this.onAddFavorite()
        } else {
            this.onDelFavorite()
        }
    }

    onAddFavorite() {
        console.log('---', 'onAddFavorite')
    }

    onDelFavorite() {
        console.log('---', 'onDelFavorite')
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
        // console.log('---', 'pererender');
        const { city, period, isCelsius, forecast } = this.state

        return [
            <Header
                onSubmitSearch={ this.onSubmitSearch }
                onChangePeriod={ this.onChangePeriod }
                onChangeUnit={ this.onChangeUnit }
                city={ city }
                period={ period }
                isCelsius={ isCelsius }
                key={ 'header' }
            />,
            <Forecast 
                onChangeFavorite={ this.onChangeFavorite }
                city= { city }
                period={ period } 
                isCelsius={ isCelsius } 
                forecast={ forecast }
                key={ 'forecast' } 
            />
        ]
    }
}

export default App