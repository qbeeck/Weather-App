import React from "react";

import "./City-block.scss";
import removeButtonSvg from "../assets/remove.svg";

const AddCity = ({ cities }) => {
  return (
    <ul className="city-list">
      {cities.map((item, index) => (
        <li key={index} className="city-list__city">
          <span className="city__span-city">{item.name}</span>
          <span className="city__span-temperature">{item.temperature}°С</span>
          <img className="city__img-remove-button" src={removeButtonSvg} alt="del"></img>
        </li>
      ))}
    </ul> 
  );
};

export default AddCity;

// <li className="city-list__city">
//         <span className="city__span-city">City</span>
//         <span className="city__span-temperature">25°С</span>
//         <img className="city__img-remove-button" src={removeButtonSvg} alt="del"></img>
//       </li>
