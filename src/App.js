import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css'
import { useState } from 'react';

const App = () => {
    // initialized states and placeholder values
    const [location, setLocation] = useState('');
    const [locationName, setLocationName] = useState('Chicago');
    const [weatherCurrent, setWeatherCurrent] = useState('79°F');
    const [weatherType, setWeatherType] = useState('Clear');
    const [weatherHigh, setWeatherHigh] = useState('81°F');
    const [weatherLow, setWeatherLow] = useState('75°F');
    const [weatherFeel, setWeatherFeel] = useState('81°F');
    const [weatherHumidity, setWeatherHumidity] = useState('57%');
    const [weatherWind, setWeatherWind] = useState('3 mph');


    const getWeatherData = (keyEvent) => {
        const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1ab8603857c8649f94ca40918a4d73f&units=imperial`;
        const weatherData_url = weatherEndpoint;

        if (keyEvent.key === 'Enter') {
            fetch(weatherData_url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setWeatherCurrent(Math.round(data["main"]["temp"]) + "°F");
                    setLocationName(data["name"]);
                    setWeatherType(data["weather"][0]["main"]);
                    setWeatherHigh(Math.round(data["main"]["temp_max"]) + "°F");
                    setWeatherLow(Math.round(data["main"]["temp_min"]) + "°F");
                    setWeatherFeel(Math.round(data["main"]["temp_max"]) + "°F");
                    setWeatherHumidity(data["main"]["humidity"] + "%");
                    setWeatherWind(Math.round(data["wind"]["speed"]) + " mph");
                    console.log(data);
                })
        }
    }

    return (
        <div className='home-grid'>

            <div className='search-wrapper'>
                <input
                    value={location}
                    onChange={newLocation => setLocation(newLocation.target.value)}
                    onKeyDown={getWeatherData}
                    className='weather-location'
                    placeholder='Enter a location'
                >
                </input>
            </div>

            <div className='title-wrapper'>
                <p className='city-state'>{locationName}</p>
                <h1 className='current-weather'>{weatherCurrent}</h1>
                <p className='current-condition'>{weatherType}</p>
            </div>

            <div className='high-low-wrapper'>
                <div className="desc-grid-item">
                    <p>High</p>
                    <p className='weather-high'>{weatherHigh}</p>
                </div>
                <div className="desc-grid-item">
                    <p>Low</p>
                    <p className='weather-low'>{weatherLow}</p>
                </div>
            </div>

            <div className='desc-wrapper'>
                <div className="desc-grid-item">
                    <p>Feels Like</p>
                    <p className='weather-feel'>{weatherFeel}</p>
                </div>
                <div className="desc-grid-item">
                    <p>humidity</p>
                    <p className='weather-humidity'>{weatherHumidity}</p>
                </div>
                <div className="desc-grid-item">
                    <p>wind speed</p>
                    <p className='weather-wind'>{weatherWind}</p>
                </div>
            </div>

        </div>
    );
}


export default App;
