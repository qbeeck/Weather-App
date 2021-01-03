import React, {useState} from 'react';
import Header from '../src/components/Header/index.jsx';
import AddList from '../src/components/City-block/index.jsx';

import dataBaseJSON from '../src/components/assets/database.json';

function App() {
  const [lists, setLists] = useState(
    dataBaseJSON.cities.map((item) => {
      return item;
    })
  );

  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  return (
    <div className="weather-app">
      <div className="weather-app__header">
        <Header onAdd={onAddList}/>
      </div>
      <div className="weather-app__alert"></div>
      <div className="weather-app__city-block">
        <AddList cities={lists}/>
      </div>
    </div>
  );
}

export default App;
