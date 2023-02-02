import { useEffect, useState } from 'react';
import apiKey from '../../../keys/weatherApiKey';
import './WeatherWidget.scss';

type weather = {
	description: string,
	icon: string,
	id: number,
	main: string
}

type main = {
	feels_like: number,
	humidity: number,
	pressure: number,
	temp: number,
	temp_max: number,
	temp_min: number,
}

type weatherRes = {
	name: string,
	weather: Array<weather>,
	main: main
}

type WeatherWidgetProps = {
	city: string
}

function WeatherWidget({ city }: WeatherWidgetProps) {
	const [weatherData, setWeatherdata] = useState<weatherRes>({ name: '', weather: [{ description: '', icon: '', id: 0, main: '' }], main: { feels_like: 0, humidity: 0, pressure: 0, temp: 0, temp_max: 0, temp_min: 0 }});
    const [resState, setResState] = useState(false);

	const url = new URL('http://api.openweathermap.org/data/2.5/weather?');
	url.searchParams.set('q', city);
	url.searchParams.set('units', 'metric');
	url.searchParams.set('appid', apiKey);
	
	async function getWeatherData() {
		try {
			const response = await fetch(url);
			const data: weatherRes = await response.json();
			setWeatherdata(data);
			setResState(true);
		} catch (error) {
			console.log(error);
		}
	}

	console.log(weatherData)

	useEffect(() => {
		if (city !== '') {
			getWeatherData();
		}
	}, [city]);
		
	return (
		<>
		{!resState ? (
				<h2 className="loading">Loading...</h2>
			) : (
			<div className="square-widget">
				<div className="widget-top">
					<div>
						<h3>{weatherData.name}</h3>
						<p className="weather-desc">{weatherData.weather[0].main}</p>
					</div>
					<img src={`../public/images/${weatherData.weather[0].icon}.svg`} alt="Weather icon" />
			</div>
			<div className="widget-bottom">
				<p className="current-temp">{weatherData.main.temp.toFixed()}<sup className="degrees-symbol">°</sup></p>
				<div>
					<p className="max-temp">{weatherData.main.temp_max.toFixed()}<sup className="degrees-symbol">°</sup></p>
					<p className="min-temp">{weatherData.main.temp_min.toFixed()}<sup className="degrees-symbol">°</sup></p>
				</div>
			</div>
		</div>
		)}
	</>
	);
}

export default WeatherWidget
