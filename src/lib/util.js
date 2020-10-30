// Get city name from address bar

export function getCityFromAddressBar() {
  if (window.URLSearchParams) {
    const city = new URLSearchParams(window.location.search).get('city') || '';

    return city ? city.split('_').join(' ') : '';
  }

  return '';
}

// Set city name to the browser address bar and history

export function setCityToAddressBar(city, title) {
  window.history.pushState({}, title, '?city=' + city.split(' ').join('_'));
}

// Capitalize the first letters of the city name

export function formatCityName(city) {
  city = city.split(' ');

  for (let key in city) {
    city[key] = city[key].charAt(0).toUpperCase() + city[key].slice(1);
  }

  return city.join(' ');
}

// Timestamp to date (e.g. '1 March 2018')

export function formatDateDMY(timestamp) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date(timestamp * 1000);

  return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
}

// Convert celsius to fahrenheit

export function celsiusToFahrenheit(val) {
  return ((val * 9) / 5 + 32).toFixed(2);
}

// Get icon name from code

export function getWeatherIcon(iconCode) {
  const iconCodes = {
    'ico-01': 'c01d',
    'ico-03': 'c04d',
    'ico-02': 'c03d;c02d;c02d',
    'ico-04': 'a06d;a05d;a04d;a03d;a02d;a01d',
    'ico-06': 't05d;t04d;t04d;t04d;t03d;t02d;t01d',
    'ico-05': 'u00d;r06d;r05d;r04d;f01d;r03d;r02d;r01d',
    'ico-07': 's06d;s02d;s01d;s05d;s05d;s04d;s03d;s02d;s01d;d03d;d02d;d01d',
  };

  for (let code in iconCodes) {
    if (~iconCodes[code].indexOf(iconCode)) {
      return code + '.png';
    }
  }

  return '';
}