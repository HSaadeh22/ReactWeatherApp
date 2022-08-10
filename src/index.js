import React from "react";
import reactDom from "react-dom";
import App from "./App"

reactDom.render(<App />, document.getElementById("root"));


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'
// import { useState } from 'react';


// // ===== VARIABLES =====



// // ===== FUNCTIONS =====
// const getWeatherData = (keyEvent, location) => {
//   const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1ab8603857c8649f94ca40918a4d73f&units=imperial`;
//   const weatherData_url = weatherEndpoint;

//   if (keyEvent.key === 'Enter') {
//     fetch(weatherData_url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const weatherCurrent = Math.round(data["main"]["temp"]) + "°F";
//         const weatherHigh = Math.round(data["main"]["temp_max"]) + "°F";
//         const weatherLow = Math.round(data["main"]["temp_min"]) + "°F";
//         const weatherFeel = Math.round(data["main"]["feels_like"]) + "°F";
//         const weatherHumidity = data["main"]["humidity"] + "%";
//         const weatherWind = Math.round(data["wind"]["speed"]) + "mph";
//       })
//   }
// }

// // ===== COMPONENTS =====
// const SearchBar = () => {
//   const [location, setLocation] = useState('');

//   return (
//     <>
//       <input
//         value={location}
//         onChange={newLocation => setLocation(newLocation.target.value)}
//         onKeyDown={getWeatherData(location)}
//         className='weather-location'
//         placeholder='Enter: City or Zip'
//       >
//       </input>
//     </>
//   );
// }

// const CurrentWeather = (props) => {
//   return (
//     <>
//       <p className='city-state'>Norridge, IL</p>
//       <h1 className='current-weather'>72° F</h1>
//       <p className='current-condition'>Clouds</p>
//     </>
//   );
// }

// const HighLow = () => {
//   return (
//     <>
//       <div className="desc-grid-item">
//         <p>High</p>
//         <p className='weather-high'>78°</p>
//       </div>
//       <div className="desc-grid-item">
//         <p>Low</p>
//         <p className='weather-low'>70°</p>
//       </div>
//     </>
//   )
// }

// const DescContent = () => {
//   return (
//     <>
//       <div className="desc-grid-item">
//         <p>Feels Like</p>
//         <p className='weather-feel'>75° F</p>
//       </div>
//       <div className="desc-grid-item">
//         <p>humidity</p>
//         <p className='weather-humidity'>80%</p>
//       </div>
//       <div className="desc-grid-item">
//         <p>wind speed</p>
//         <p className='weather-wind'>5 mph</p>
//       </div>
//     </>
//   );
// }


// // ===== MAIN GRID COMPONENT =====
// const HomeGrid = () => {
//   return (
//     <div className='home-grid'>

//       <div className='search-wrapper'>
//         <SearchBar />
//       </div>

//       <div className='title-wrapper'>
//         <CurrentWeather />
//       </div>

//       <div className='high-low-wrapper'>
//         <HighLow />
//       </div>

//       <div className='desc-wrapper'>
//         <DescContent />
//       </div>

//     </div>
//   );
// }
