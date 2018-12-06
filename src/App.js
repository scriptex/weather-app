import React, { Component } from 'react';

class App extends Component {
	base = 'https://api.openweathermap.org/data/2.5/weather?q=';
	appId = '&units=metric&appid=ac4bbd3c23dc38c5831469c1976a79ff';
	imgExt = '.png';
	imgBase = '//openweathermap.org/img/w/';

	state = {
		city: '',
		data: {},
		error: ''
	};

	getData = async params => {
		const data = await fetch(this.base + params + this.appId)
			.then(response => response.json())
			.catch(this.onError);

		console.log(data);

		this.setState({ data });
	};

	onSubmit = e => {
		e.preventDefault();

		const params = this.state.city;

		if (!params) {
			this.setState({
				error: 'Please type a city'
			});

			return;
		}

		this.setState({
			error: ''
		});

		this.getData(params);
	};

	onSuccess = position => {
		const { latitude, longitude } = position.coords;
		const params = `?lat=${latitude}&lon=${longitude}`;

		this.getData(params);
	};

	onError = e => {
		const error = typeof e === 'string' ? e : '';

		this.setState({
			error
		});
	};

	temp = kelvin => Math.round(kelvin - 273.15);

	time = date => {
		const dateObj = new Date(Date(date));
		const hours = dateObj.getHours();
		const minutes = dateObj.getMinutes();

		return `${hours}:${minutes}`;
	};

	componentDidMount = () => {
		navigator.geolocation &&
			navigator.geolocation.getCurrentPosition(
				this.onSuccess,
				this.onError
			);
	};

	renderData = data => {
		if (!Object.keys(data).length) {
			return null;
		}

		if (data.cod !== 200) {
			return <h2>{data.message}</h2>;
		}

		const { name, sys, coord, weather, main, wind } = data;

		// TODO: convert wind props to human readable strings
		// https://www.windfinder.com/wind/windspeed.htm
		return (
			<React.Fragment>
				<h2>
					{name}, {sys.country}
				</h2>

				<table>
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
									src={`${this.imgBase}${item.icon}${
										this.imgExt
									}`}
									alt={item.description}
								/>
							</td>

							<td>{item.main}</td>
						</tr>
					))}

					<tr>
						<td>Sunrise:</td>

						<td>{this.time(sys.sunrise)}</td>
					</tr>

					<tr>
						<td>Sunset:</td>

						<td>{this.time(sys.sunset)}</td>
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
				</table>
			</React.Fragment>
		);
	};

	render() {
		const { city, data, error } = this.state;

		return (
			<React.Fragment>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Type a city..."
						value={city}
						onChange={e => this.setState({ city: e.target.value })}
					/>

					<button type="submit">Go</button>
				</form>

				{this.renderData(data)}

				{error && <h3>{error}</h3>}
			</React.Fragment>
		);
	}
}

export default App;
