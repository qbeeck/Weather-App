import React from "react";

import "./City-block.scss";
import removeButtonSvg from "../assets/remove.svg";

const AddCity = ({ cities, removeCity, result }) => {
  const fetchCity = async (item) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=fd12c0b603b681217c41eefc997c5495`
    );
    const json = await response.json();
    let obj = {
      id: Math.random(),
      city: json.name,
      country: json.sys.country,
      temperature: Math.round(json.main.temp - 273.15),
      feelsLike: Math.round(json.main.feels_like - 273.15),
      pressure: Math.round(json.main.pressure * 0.75),
      humidity: json.main.humidity,
      speedWind: Math.round(json.wind.speed * 3,6),
      sunrise: json.sys.sunrise,
      sunset: json.sys.sunset,
    };
    return obj;
  };

  const createObj = async (item) => {
    const mainObj = [await fetchCity(item)];
    result(mainObj);
  };

  return (
    <ul className="city-list">
      {cities.map((item) => (
        <li key={item.id} className="city-list__city">
          <span
            onClick={() => createObj(item.name)}
            className="city__span-city"
          >
            {item.name}
          </span>
          <span className="city__span-temperature">{item.temperature}°С</span>
          <img
            onClick={() => removeCity(item)}
            className="city__img-remove-button"
            src={removeButtonSvg}
            alt="del"
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default AddCity;
