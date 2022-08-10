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

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'
// import { useState } from 'react';


// const getWeatherData = (keyEvent, location) => {
//     const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1ab8603857c8649f94ca40918a4d73f&units=imperial`;
//     const weatherData_url = weatherEndpoint;

//     if (keyEvent.key === 'Enter') {
//         fetch(weatherData_url)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 const weatherCurrent = Math.round(data["main"]["temp"]) + "°F";
//                 const weatherHigh = Math.round(data["main"]["temp_max"]) + "°F";
//                 const weatherLow = Math.round(data["main"]["temp_min"]) + "°F";
//                 const weatherFeel = Math.round(data["main"]["feels_like"]) + "°F";
//                 const weatherHumidity = data["main"]["humidity"] + "%";
//                 const weatherWind = Math.round(data["wind"]["speed"]) + "mph";
//             })
//     }
// }

// // ===== COMPONENTS =====
// const SearchBar = () => {
//     const [location, setLocation] = useState('');

//     return (
//         <>
//             <input
//                 value={location}
//                 onChange={newLocation => setLocation(newLocation.target.value)}
//                 onKeyDown={getWeatherData(location)}
//                 className='weather-location'
//                 placeholder='Enter: City or Zip'
//             >
//             </input>
//         </>
//     );
// }

// const CurrentWeather = (props) => {
//     return (
//         <>
//             <p className='city-state'>Norridge, IL</p>
//             <h1 className='current-weather'>72° F</h1>
//             <p className='current-condition'>Clouds</p>
//         </>
//     );
// }

// const HighLow = () => {
//     return (
//         <>
//             <div className="desc-grid-item">
//                 <p>High</p>
//                 <p className='weather-high'>78°</p>
//             </div>
//             <div className="desc-grid-item">
//                 <p>Low</p>
//                 <p className='weather-low'>70°</p>
//             </div>
//         </>
//     )
// }

// const DescContent = () => {
//     return (
//         <>
//             <div className="desc-grid-item">
//                 <p>Feels Like</p>
//                 <p className='weather-feel'>75° F</p>
//             </div>
//             <div className="desc-grid-item">
//                 <p>humidity</p>
//                 <p className='weather-humidity'>80%</p>
//             </div>
//             <div className="desc-grid-item">
//                 <p>wind speed</p>
//                 <p className='weather-wind'>5 mph</p>
//             </div>
//         </>
//     );
// }


// // ===== MAIN GRID COMPONENT =====
// const HomeGrid = () => {
//     return (
//         <div className='home-grid'>

//             <div className='search-wrapper'>
//                 <SearchBar />
//             </div>

//             <div className='title-wrapper'>
//                 <CurrentWeather />
//             </div>

//             <div className='high-low-wrapper'>
//                 <HighLow />
//             </div>

//             <div className='desc-wrapper'>
//                 <DescContent />
//             </div>

//         </div>
//     );
// }

// const App = () => {
//     return <HomeGrid />;
// }

// export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HomeGrid />);