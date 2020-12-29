import React from 'react';
import Header from '../src/components/Header/index.jsx';
import AddList from '../src/components/City-block/index.jsx';

function App() {
  return (
    <div className="weather-app">
      <div className="weather-app__header">
        <Header />
      </div>

      <div className="weather-app__city-block">
        <AddList  />
      </div>

    </div>
  );
}

export default App;
