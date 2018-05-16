import React, { Component } from 'react'

class City extends Component {
    render() {
        const { city, onChangeFavorite } = this.props

        return (
            <div id="forecast-header">
                <label>
                    <input type="checkbox" name="favorite" id="favorite" onChange={ onChangeFavorite } />
                    <span><span>favorite city</span></span>
                </label>
                <h1>{city}</h1>
            </div>
        )
    }
}

export default City