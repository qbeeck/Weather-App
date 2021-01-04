import React from "react";

import "./Modal.scss";

const Modal = () => {
  return (
    <div className="modal__modal-content">
      <div className="modal-content__modal-header">
        <span className="modal-header__city-name">Chisinau </span>
        <span className="modal-header__country-name">/ MD</span>
      </div>
      <div className="modal-content__modal-body">
        <div className="modal-body__temperature">
          <span className="temperature__temp">Temperature : 30</span>
          <span className="temperature__feels-like">Temperature feels like : 31</span>
        </div>
        <div className="modal-body__other-info">
          <span className="other-info__pressure">Pressure : 765</span>
          <span className="other-info__humidity">Humidity : 100%</span>
          <span className="other-info__wind-speed">Wind speed : 3mph</span>
        </div>
      </div>
      <div className="modal-content__modal-footer">
        <span className="modal-footer__sunrise">Sunrise : 29:00:00</span>
        <span className="modal-footer__sunset">Sunset : 29:00:00</span>
      </div>
    </div>
  );
};

export default Modal;
