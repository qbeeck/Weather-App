import React from 'react';
import Header from '../src/components/Header/index.jsx';
import AddList from '../src/components/City-block/index.jsx';

import dataBaseJSON from '../src/components/assets/database.json';

function App() {
  return (
    <div className="weather-app">
      <div className="weather-app__header">
        <Header/>
      </div>
      <div className="weather-app__alert"></div>
      <div className="weather-app__city-block">
        <AddList cities={dataBaseJSON.cities}/>
      </div>
    </div>
  );
}

export default App;
