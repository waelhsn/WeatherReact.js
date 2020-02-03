import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const api = {
  key: "2fd1aaaa85e1d7d52c0b96d4920346a4",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }


  return (
    
    <div className={(typeof weather.main )}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
              <div id="feels-like">Feels like: {Math.round(weather.main.feels_like)}°c</div>
            </div>
            <div className="weather">{weather.weather[0].main}</div>
            
          </div>
          <div className="developed-by">
           Developed By Wael Hasan
          </div>
        </div>
        ) : ('')}
      </main>
      
    </div>
  );
}

export default App;
