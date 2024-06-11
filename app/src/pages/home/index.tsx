import React, { useEffect, useState } from "react";
import "./style.scss";

interface WeatherData {
  temperature: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
  image: string;
}

const Home: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 0,
    windSpeed: 0,
    humidity: 0,
    pressure: 0,
    image: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDate(now.toLocaleDateString("pl-PL"));
      setTime(now.toLocaleTimeString("pl-PL"));
    };

    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime();

    const fetchWeatherData = async () => {
      const weatherData = {
        temperature: 25,
        windSpeed: 10,
        humidity: 78,
        pressure: 1022,
        image: "path_to_image.png",
      };
      setWeather(weatherData);
    };

    fetchWeatherData();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="left-panel">
        <div className="date" id="current-date">
          {date}
        </div>
        <div className="time" id="current-time">
          {time}
        </div>
      </div>
      <div className="main-panel">
        <div className="title">
          <h1>Weather Co.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            venenatis neque. Aliquam dictum ac urna ut varius. Nunc faucibus
            bibendum hendrerit. Donec semper nec risus quis ornare. Aliquam id
            lacinia lectus.
          </p>
        </div>
        <div
          className="image-container"
          id="weather-image"
          style={{ backgroundImage: `url(${weather.image})` }}
        ></div>
      </div>
      <div className="right-panel">
        <div className="weather-info">
          <div className="temperature">
            <span className="label">Temperatura:</span>{" "}
            <span id="temperature">{weather.temperature}</span> °C
          </div>
          <div className="wind-speed">
            <span className="label">Prędkość wiatru:</span>{" "}
            <span id="wind-speed">{weather.windSpeed}</span> km/h
          </div>
          <div className="humidity">
            <span className="label">Wilgotność:</span>{" "}
            <span id="humidity">{weather.humidity}</span> %
          </div>
          <div className="pressure">
            <span className="label">Ciśnienie:</span>{" "}
            <span id="pressure">{weather.pressure}</span> hPa
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
