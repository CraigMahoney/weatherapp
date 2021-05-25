import React from 'react';
import Loading from 'components/Loading';
import Item from '../Item/index';
import './index.scss';

const ForecastList = props => (
	<div className="forecast-list">
		<div className="location-name">
			<span>Weather Forecast for {props.locationName}</span>
		</div>
		<div className="reload">
			<button onClick={props.onPressRefresh} disabled={props.loading}>Refresh</button>
		</div>
		{
			props.loading ? (
				<Loading />
			) : (
				<div className="forecast-day">
					{props.forecast.map((item, index) => (
						<Item
							key={index}
							{...item}
						/>
					))}
				</div>
			)
		}
	</div>
);

export default ForecastList;
