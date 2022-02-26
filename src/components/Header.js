import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {

  function handleClick() {
    onDarkModeClick();
  }
  
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={handleClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
