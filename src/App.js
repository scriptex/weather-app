import React, { useState } from 'react';

import { getData, toTime } from './utils';
import { IMG_EXT, IMG_BASE } from './constants';

const App = () => {
	const [city, setCity] = useState('');
	const [data, setData] = useState({});
	const [error, setError] = useState('');

	const renderData = data => {
		if (!Object.keys(data).length) {
			return null;
		}

		if (data.cod !== 200) {
			return <h2>{data.message}</h2>;
		}

		const { name, sys, coord, weather, main, wind } = data;

		return (
			<React.Fragment>
				<h2>
					{name}, {sys.country}
				</h2>

				<table>
					<tbody>
						<tr>
							<td>Coordinates:</td>

							<td>
								[{coord.lat}, {coord.lon}]
							</td>
						</tr>

						{weather.map((item, i) => (
							<tr key={i}>
								<td>
									<img
										src={`${IMG_BASE}${
											item.icon
										}${IMG_EXT}`}
										alt={item.description}
									/>
								</td>

								<td>{item.main}</td>
							</tr>
						))}

						<tr>
							<td>Sunrise:</td>

							<td>{toTime(sys.sunrise)}</td>
						</tr>

						<tr>
							<td>Sunset:</td>

							<td>{toTime(sys.sunset)}</td>
						</tr>

						<tr>
							<td>Current temp:</td>

							<td>{main.temp}&deg; C</td>
						</tr>

						<tr>
							<td>Maximum temp:</td>

							<td>{main.temp_max}&deg; C</td>
						</tr>

						<tr>
							<td>Minimum temp:</td>

							<td>{main.temp_min}&deg; C</td>
						</tr>

						<tr>
							<td>Humidity:</td>

							<td>{main.humidity} %</td>
						</tr>

						<tr>
							<td>Pressure:</td>

							<td>{main.pressure} hpa</td>
						</tr>

						<tr>
							<td>Wind speed:</td>

							<td>{wind.speed} m/s</td>
						</tr>

						<tr>
							<td>Wind direction:</td>

							<td>{data.wind.deg}</td>
						</tr>
					</tbody>
				</table>
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<form
				onSubmit={e => {
					e.preventDefault();

					if (!city) {
						setError('Please type a city.');
						return;
					}

					setError('');
					getData(city, setData, setError);
				}}
			>
				<input
					type="text"
					placeholder="Type a city..."
					value={city}
					onChange={e => setCity(e.target.value)}
				/>

				<button type="submit">Go</button>
			</form>

			{renderData(data)}

			{error && <h3>{error}</h3>}
		</React.Fragment>
	);
};

export default App;
