/**
 * Weatherbit API (https://www.weatherbit.io/api/weather-forecast-16-day)
 */

const API_KEY_PUBLIC = '351954d3a30a4b60ad716f1c73cc43ee';
const API_URL = 'api.weatherbit.io/v2.0/forecast/daily';
const CACHE_EXPIRY = 21600; // expiry of local app cache for forecast's queries

let cache = []; // local app cache for forecast's queries

function request(city) {
  const http = window.location.protocol === 'https:' ? 'https://' : 'http://';
  const url = `${http}${API_URL}?key=${API_KEY_PUBLIC}&lang=en&units=M&days=16&city=${city}`;

  const handler = (response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  };

  return fetch(url)
    .then(handler)
    .then((forecast) => setCache(forecast));
}

function setCache(forecast) {
  forecast.timestamp = Math.floor(Date.now() / 1000);

  forecast.cached_city = forecast.city_name.toLowerCase();

  forecast.data = forecast.data.map((day, index) => {
    day.uid = index;

    return day;
  });

  cache.unshift(forecast);

  return forecast;
}

function getCache(city) {
  const timestamp = Math.floor(Date.now() / 1000);
  city = city.toLowerCase();

  for (let data of cache) {
    if (city === data.cached_city && timestamp - data.timestamp < CACHE_EXPIRY) {
      return data;
    }
  }
}

function validCity(city) {
  return city.search(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/) >= 0 ? true : false;
}

function forecast(city) {
  if (!validCity(city)) {
    return new Promise(() => {
      throw new Error(600);
    });
  }

  const data = getCache(city);

  if (data) {
    return new Promise((resolve) => resolve(data));
  }

  return request(city);
}

export default forecast;
