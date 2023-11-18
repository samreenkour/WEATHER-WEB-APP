import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const apiKey = '59d18a9d61e24eb08df06d1a75cde616';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      const dailyData = response.data.list.filter((data, index) => index % 8 === 0);
      setWeatherData(dailyData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  const formatTime = (timestamp) => {
    const time = new Date(timestamp * 1000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="weather-app">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Search</button>
      </div>

      {weatherData.length > 0 && (
        <div className="days-forecast">
          <h2>5-Day Weather Forecast</h2>
          <ul className="weather-cards">
            {weatherData.map((data, index) => (
              <li key={index} className="card">
                <h3>{formatDate(data.dt)}</h3>
                <p>High: {data.main.temp_max} °C</p>
                <p>Low: {data.main.temp_min} °C</p>
                <p>Geo Coordinates: {data.coord?.lat}, {data.coord?.lon}</p>
                <p>Humidity: {data.main.humidity}%</p>
                <p>Sunrise: {formatTime(data.sys.sunrise)}</p>
                <p>Sunset: {formatTime(data.sys.sunset)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
