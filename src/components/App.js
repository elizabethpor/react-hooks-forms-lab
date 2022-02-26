import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function onNewItemNameInput(newName) {
    setNewItemName(newName);
  }

  function onCategoryPick(pickedCategory) {
    setNewItemCategory(pickedCategory);
  }

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]);
    setNewItemName("");
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList 
        items={items} 
        newItemName={newItemName} 
        onNewItemNameInput={onNewItemNameInput} 
        newItemCategory={newItemCategory} 
        onCategoryPick={onCategoryPick}
        onItemFormSubmit={onItemFormSubmit}/>
    </div>
  );
}

export default App;
