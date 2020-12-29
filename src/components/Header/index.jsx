import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div>
      <input className="weather-app__header__input" type="text"></input>
      <button className="weather-app__header__search-button">Search</button>
    </div>
  );
};

export default Header;