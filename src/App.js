import React, { useState } from "react";
import Header from "../src/components/Header/index.jsx";
import AddList from "../src/components/City-block/index.jsx";
import Modal from "../src/components/Modal/index.jsx";

import closeButtonSvg from "../src/components/assets/close.svg";

function App() {
  const [lists, setLists] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [resultModal, setResultModal] = useState();

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

  const openModal = (obj) => {
    setResultModal(obj);
    setVisibleModal(true);
  };

  return (
    <div className="weather-app">
      <div className="weather-app__header">
        <Header onAdd={onAddList} />
      </div>
      {visibleModal && (
        <div className="weather-app__modal">
          <img
            onClick={() => setVisibleModal(false)}
            src={closeButtonSvg}
            className="modal__return-button"
            alt="close"
          />
          <Modal modalList={resultModal} />
        </div>
      )}
      <div className="weather-app__city-block">
        <AddList
          result={(obj) => openModal(obj)}
          cities={lists}
          removeCity={(item) => onRemoveList(item)}
        />
      </div>
    </div>
  );
}

export default App;
