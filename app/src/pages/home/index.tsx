import React, { useEffect, useState } from "react";
import "./style.scss";

const Home: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [weatherData, setWeatherData] = useState({
    temperature: "--",
    windSpeed: "--",
    humidity: "--",
    pressure: "--",
  });
  const [themeImage, setThemeImage] = useState<string>("cloud1.png");
  const [currentDate, setCurrentDate] = useState<{
    day: string;
    month: string;
    year: string;
  }>({ day: "", month: "", year: "" });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("pl-PL"));
    };

    setInterval(updateDateTime, 1000);
    updateDateTime();

    const fetchWeatherData = async () => {
      const data = {
        temperature: 25,
        windSpeed: 10,
        humidity: 78,
        pressure: 1022,
      };

      setWeatherData({
        temperature: data.temperature.toString(),
        windSpeed: data.windSpeed.toString(),
        humidity: data.humidity.toString(),
        pressure: data.pressure.toString(),
      });
    };

    fetchWeatherData();

    const updateDate = () => {
      const now = new Date();
      setCurrentDate({
        day: now.getDate().toString().padStart(2, "0"),
        month: (now.getMonth() + 1).toString().padStart(2, "0"),
        year: now.getFullYear().toString(),
      });
    };

    updateDate();

    const hour = new Date().getHours();
    const darkTheme = hour >= 18 || hour < 6;
    setIsDarkTheme(darkTheme);
    setThemeImage(darkTheme ? "moon.png" : "cloud1.png");
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    setThemeImage(isDarkTheme ? "cloud1.png" : "moon.png");
  };

  return (
    <div className={`home ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="left-panel">
        <div className="date-container">
          <div className="date">{currentDate.day}</div>
          <div className="date">{currentDate.month}</div>
          <div className="date">{currentDate.year}</div>
        </div>
      </div>
      <div className="container">
        <div className="image-container" id="weather-image">
          <img id="theme-image" src={themeImage} alt="Theme Image" />
        </div>
        <div className="main-panel">
          <div className="title">
            <div className="time" id="current-time">
              {currentTime}
            </div>
            <h1>Weather Co.</h1>
            <p>
              Nasza stacja pogodowa to urządzenie, które zbiera dane
              meteorologiczne, takie jak temperatura, wilgotność, ciśnienie
              atmosferyczne i prędkość wiatru. Wszystkie zebrane informacje są
              przesyłane na serwer zachowując największą możliwą aktualność i
              dokładność. Z serwera dane są przesyłane na naszą stronę
              internetową gdzie użytkownicy mogą przeglądać aktualne pomiary
              pogodowe.
            </p>
          </div>
        </div>
      </div>
      <div className="right-panel">
        <div className="weather-info">
          <div className="temperature">
            <span className="label">Temperatura:</span>{" "}
            <span id="temperature">{weatherData.temperature}</span> °C
          </div>
          <div className="wind-speed">
            <span className="label">Prędkość wiatru:</span>{" "}
            <span id="wind-speed">{weatherData.windSpeed}</span> km/h
          </div>
          <div className="humidity">
            <span className="label">Wilgotność:</span>{" "}
            <span id="humidity">{weatherData.humidity}</span> %
          </div>
          <div className="pressure">
            <span className="label">Ciśnienie:</span>{" "}
            <span id="pressure">{weatherData.pressure}</span> hPa
          </div>
        </div>
      </div>
      <div className="theme-switcher">
        <label className="switch">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Home;
