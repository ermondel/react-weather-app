import React, { Component } from 'react'
import Header from './components/header/'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: '',
            period: 3,
            isCelsius: true,
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

    render() {
        return (
            <div>
                <Header
                    onSubmitSearch={ this.onSubmitSearch }
                    onChangePeriod={ this.onChangePeriod }
                    onChangeUnit={ this.onChangeUnit }
                    city={ this.state.city }
                    period={ this.state.period }
                    isCelsius={ this.state.isCelsius }
                />
            </div>
        )
    }
}

export default App