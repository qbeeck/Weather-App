import React from "react";


import "./City-block.scss";
import removeButtonSvg from "../assets/remove.svg";

const AddCity = ({ cities, removeCity, openModal }) => {
  return (
    <ul className="city-list">
      {cities.map((item) => (
        <li key={item.id} className="city-list__city">
          <span onClick={() => openModal(item.name)} className="city__span-city">{item.name}</span>
          <span className="city__span-temperature">{item.temperature}°С</span>
          <img onClick={() => removeCity(item)} className="city__img-remove-button" src={removeButtonSvg} alt="del"></img>
        </li>
      ))}
    </ul> 
  );
};

export default AddCity;
