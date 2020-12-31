import React, { useState } from "react";

import "./Header.scss";

const Header = () => {
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState("false");
  const [result, setResult] = useState();
  
  const enteredData = () => searchWord !== "" ? getCityInfo() : alert("Введите запрос!");

  
  const getCityInfo = async () => {
    try {
      setLoading("true");
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchWord}&appid=fd12c0b603b681217c41eefc997c5495`);
      const json = await response.json();
      setResult(json);
    } catch (error) {
      setLoading("null");
      alert("Something wrong with API!")
    }
  }

  

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
      onClick={enteredData}
        className="weather-app__header__search-button"
      >
        Search
      </button>
    </div>
  );
};

export default Header;


// `api.openweathermap.org/data/2.5/weather?q=${searchWord}&appid=fd12c0b603b681217c41eefc997c5495`