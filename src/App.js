import React, { useState } from "react";
import Header from "../src/components/Header/index.jsx";
import AddList from "../src/components/City-block/index.jsx";

function App() {
  const [lists, setLists] = useState([]);

  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  const refreshList = () => {
    const newList = [...lists];
    setLists(newList);
  }

  const onRemoveList = (obj) => {
    let pos = lists.findIndex(item => item.id == obj.id);
    let newList = lists;
    newList.splice(pos, 1);
    refreshList();
  };

  return (
    <div className="weather-app">
      <div className="weather-app__header">
        <Header onAdd={onAddList} />
      </div>
      <div className="weather-app__city-block">
        <AddList cities={lists} removeCity={(item) => onRemoveList(item)} />
      </div>
    </div>
  );
}

export default App;
