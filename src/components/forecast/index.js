import React, { Component } from 'react';
import moment from 'moment';
import { getForecastByLatLon } from 'services/owf';

import ForecastList from './list/index';

class Forecast extends Component {

	// Use GeoLocation obj or user input
    locationObj = {
		name: 'Dublin, Ireland',
		lat: 53.3498,
        lon: 6.2603
    };

	state = {
		loading: false,
		forecast: []
	}

	componentWillMount() {
		this.getForecastData();
	}

	async getForecastData() {
		this.setState({ loading: true });
		const result = await getForecastByLatLon();
		this.setState({
			loading: false,
            location: this.locationObj,
			forecast: result.list.map(item => ({
				date: moment(item.dt * 1000),
				temp: item.main.temp,
				humidity: item.main.humidity,
				weather: item.weather[0],
			}))
		});
	}

	render() {
		return (
			<ForecastList
				locationName={this.locationObj.name}
				forecast={this.state.forecast}
				loading={this.state.loading}
				onPressRefresh={() => this.getForecastData()}
			/>
		);
	}
}

export default Forecast;
