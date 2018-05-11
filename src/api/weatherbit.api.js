/**
 * Forecast API
 * weatherbit (https://www.weatherbit.io/api/weather-forecast-16-day)
 */
class WeatherbitApi {
    constructor() {
        this.cache    = [];    // local app cache for forecast's queries
        this.expiry   = 21600; // expiry of local app cache for forecast's queries
        this.API_KEY  = '351954d3a30a4b60ad716f1c73cc43ee';
        this.BASE_URL = 'api.weatherbit.io/v2.0/forecast/daily';
    }

    /**
     * Return promise with forecast data from server
     * @param string city
     * @return object promise
     */
    requestForecast(city) {
        const url = `${this.getProtocol()}${this.BASE_URL}?key=${this.API_KEY}&lang=en&units=M&days=16&city=${city}`;

        return fetch(url).then(response => {
            if (Number(response.status) === 200) return response.json();
            throw new Error('system');
        }).then(data => {
            data.timestamp = this.dateNow();
            this.cache.unshift(data);
            return data;
        });
    }

    /**
     * @return string protocol: https:// or http://
     */
    getProtocol() {
        return window.location.protocol === 'https:' ? 'https://' : 'http://';
    }

    /**
     * @param string city
     * @return string or null
     */
    getFromCache(city) {
        for (let data of this.cache) {
			if (city.toLowerCase() === data.city_name.toLowerCase()) {
				if (this.dateNow() - data.timestamp < this.expiry) return data;
			}
        }
        return null;
    }

    /**
     * @return date current date in unix timestamp
     */
    dateNow() {
        return Math.floor(Date.now() / 1000);
    }

    /**
     * Validate city name
     * @param string city
     * @return boolean
     */
    validCity(city) {
        return city.search(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/) >= 0 ? true : false;
    }

    /**
     * @param string city
     */
    getForecast(city) {
        if (this.validCity(city)) {
            const data = this.getFromCache(city);
            if (data) {
                return new Promise((resolve) => resolve(data));
            } else {
                return this.requestForecast(city);
            }
        } else {
            return new Promise(() => { throw new Error('invalid'); });
        }
    }
}

export const API = new WeatherbitApi()