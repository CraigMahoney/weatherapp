import React from 'react';

import 'owfont/css/owfont-regular.css';
import './index.scss';

const ForecastItem = props => (
	<div className="forecast-item">
		<div className="date">
			<span>{props.date.format('MMM D Y')}<br />{props.date.format('HH:mm')}</span>
		</div>
		<div className="weather">
			<div className={`owf owf-${props.weather.id}`} />
			<div className="description">
				<span>{props.weather.main}</span>
			</div>
		</div>
		<div className="temperature">
			<span>{Math.round(props.temp)}&deg;c</span>
		</div>
	</div>
);

export default ForecastItem;
