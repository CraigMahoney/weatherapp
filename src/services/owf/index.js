import qs from 'qs';

const apiKey = 'b0a110436a60aef26a0833d16e4eef81';
const apiUrl = 'http://api.openweathermap.org/data/2.5';

const getApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
	const request = {
		method,
		headers,
		...(method !== 'get') ? {
			body: JSON.stringify(payload),
		} : {},
	};

	const reqUrl = `${apiUrl}${endPoint}?APPID=${apiKey}${
		(method === 'get') ? `&${qs.stringify(payload)}` : ''
	}`;

	return fetch(reqUrl, request)
	.then(response => (
		response.json()
			.then(json => ({ json, response }))
			.catch(() => ({ json: {}, response }))
	))
	.then(({ json, response }) => {
		if (response.ok === false) {
			throw json;
		}
		return json;
	})
	.catch((e) => {
		if (e.response && e.response.json) {
			return e.response.json().then((json) => {
				if (json) throw json;
				throw e;
			});
		} else {
			throw e;
		}
	});
}

export const getForecastByLatLon = locationObj => getApi(`/forecast`, { lat: 53.3498, lon: 6.2603, units: 'metric' });
