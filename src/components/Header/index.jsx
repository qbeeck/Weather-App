import React, { useState } from "react";

import "./Header.scss";

const Header = ({ onAdd }) => {
  const [searchWord, setSearchWord] = useState("");

  const fetchData = async () => {
    if (!searchWord) {
      alert("Введите название списка");
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchWord}&appid=fd12c0b603b681217c41eefc997c5495`
      );
      const json = await response.json();
      if (json.base !== "stations") { 
        alert(json.message);
        return;
      }
      let obj = {
        id: Math.random(),
        name: json.name,
        temperature: Math.round(json.main.temp - 273.15)
      };
      onAdd(obj);
      setSearchWord("");
    } catch (error) {
      alert("Something wrong with API!");
    }
  };

  return (
    <div>
      <input
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        className="weather-app__header__input"
        type="text"
        placeholder="Сity name"
      ></input>
      <button
        onClick={fetchData}
        className="weather-app__header__search-button"
      >
        Search
      </button>
    </div>
  );
};

export default Header;
