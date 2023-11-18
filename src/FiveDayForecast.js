// FiveDayForecast.js
import React from 'react';

const FiveDayForecast = () => {
  const forecastData = [
    { day: 'Monday', temperature: '25°C', wind: '5 M/S', humidity: '60%' },
    { day: 'Tuesday', temperature: '24°C', wind: '6 M/S', humidity: '55%' },
    { day: 'Wednesday', temperature: '26°C', wind: '7 M/S', humidity: '58%' },
    { day: 'Thursday', temperature: '23°C', wind: '4 M/S', humidity: '62%' },
    { day: 'Friday', temperature: '27°C', wind: '8 M/S', humidity: '50%' },
  ];

  return (
    <ul className="weather-cards">
      {forecastData.map((day, index) => (
        <li className="card" key={index}>
          <h3>{day.day}</h3>
          <h6>Temp: {day.temperature}</h6>
          <h6>Wind: {day.wind}</h6>
          <h6>Humidity: {day.humidity}</h6>
        </li>
      ))}
    </ul>
  );
};

export default FiveDayForecast;
