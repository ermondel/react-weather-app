/**
 * Get city name from search in browser address bar
 */
export function cityFromLoc() {
	if (window.URLSearchParams) {
		const city = new URLSearchParams(window.location.search).get('city') || '';
		return city ? city.replace('_', ' ') : '';
	}
	return '';
}

/**
 * Set city name to the browser address bar and history
 */
export function cityToLoc(city, title) {
	window.history.pushState({}, title, "?city=" + city.replace(' ', '_'));
}

/**
 * Convert all words of city name to uppercase
 */
export function cityUppercase(city) {
	city = city.split(' ');
	for (let key in city) city[key] = city[key].charAt(0).toUpperCase() + city[key].slice(1);
	return city.join(' ');
}

/**
 * Get filename from key in set if file_name is in pack values
 * pack e.g. { 'main':'foo;bar;baz', 'alice':'qwe;asd;zxc', 'bob':'hhh;fff;ggg' }
 * @param {string} file_name
 * @param {object} pack
 * @return {string}
 */
export function filesManyToOne(file_name, pack) {
	for (let key in pack) {
		const list = pack[key].split(';');
		if (~list.indexOf(file_name)) return key;
	}
	return '';
}

/**
 * Timestamp to D Month Y
 * return e.g. '1 March 2018'
 * @param {number} timestamp 
 * @return {string}
 */
export function D_Month_Y(timestamp) {
	const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	const date   = new Date(timestamp*1000);
	return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
}

/**
 * Convert celsius to fahrenheit
 * @param {number} val
 * @return {number}
 */
export function CelsiusToFahrenheit(val) {
	return (val * 9/5 + 32).toFixed(2);
}
