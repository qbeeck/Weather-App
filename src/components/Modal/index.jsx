import React from "react";

import "./Modal.scss";

const Modal = ({ modalGive }) => {
  const timeConverter = (time) => {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  };
  return (
    <div className="modal__modal-content">
      {modalGive.map((item) => (
        <div key={item.id}>
          <div className="modal-content__modal-header">
            <span className="modal-header__city-name">{item.city}</span>
            <span>/</span>
            <span className="modal-header__country-name">{item.country}</span>
          </div>
          <div className="modal-content__modal-body">
            <div className="modal-body__temperature">
              <span className="temperature__temp">Temperature : {item.temperature}°С</span>
              <span className="temperature__feels-like">Feels like : {item.feelsLike}°С</span>
            </div>
            <div className="modal-body__other-info">
              <span className="other-info__pressure">Pressure : {item.pressure} m.c</span>
              <span className="other-info__humidity">Humidity : {item.humidity} %</span>
              <span className="other-info__wind-speed">Wind speed : {item.speedWind} km/h</span>
            </div>
          </div>
          <div className="modal-content__modal-footer">
            <span className="modal-footer__sunrise">Sunrise : {timeConverter(item.sunrise)}</span>
            <span className="modal-footer__sunset">Sunset : {timeConverter(item.sunset)}</span>
          </div>  
        </div>
      ))}
    </div>
  );
};

export default Modal;
