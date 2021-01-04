import React, { useState } from "react";
import Header from "../src/components/Header/index.jsx";
import AddList from "../src/components/City-block/index.jsx";
import Modal from "../src/components/Modal/index.jsx";

import closeButtonSvg from "../src/components/assets/close.svg";

// Очистить строку поиска после нажатия на кнопку
// Нажатие на enter нажимает на кнопку поиска
// Сделать под мобильное разрешение экрана

// Доделать модальное окно
// Раскидать туда информацию с объекта
// Кнопку закрыть, состояние и клик по экрану закрывает модальное окно

function App() {
  const [lists, setLists] = useState([]);
  // const [visibleModal, setVisibleModal] = useState(false);

  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  const refreshList = () => {
    const newList = [...lists];
    setLists(newList);
  };

  const onRemoveList = (obj) => {
    let pos = lists.findIndex((item) => item.id === obj.id);
    let newList = lists;
    newList.splice(pos, 1);
    refreshList();
  };

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
      speedWind: json.wind.speed,
      sunrise: json.sys.sunrise,
      sunset: json.sys.sunset,
    };
    return obj;
  };

  const onOpenModal = async (item) => {
    const mainObj = await fetchCity(item);
    console.log(mainObj);
  };

  return (
    <div className="weather-app">
      <div className="weather-app__header">
        <Header onAdd={onAddList} />
      </div>
      <div className="weather-app__modal">
        <img src={closeButtonSvg} className="modal__return-button" />
        <Modal />
      </div>
      <div className="weather-app__city-block">
        <AddList
          cities={lists}
          removeCity={(item) => onRemoveList(item)}
          openModal={(item) => onOpenModal(item)}
        />
      </div>
    </div>
  );
}

export default App;
