import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, newItemName, onNewItemNameInput, newItemCategory, onCategoryPick, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function onCategoryChange(category) {
    setSelectedCategory(category);
  }

  function onSearchChange(searchedValue) {
    setSearchText(searchedValue);
  }

  const itemsToDisplay = items.filter(
    (item) => (selectedCategory === "All" || item.category === selectedCategory)
  ).filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm 
        newItemName={newItemName} 
        onNewItemNameInput={onNewItemNameInput} 
        newItemCategory={newItemCategory} 
        onCategoryPick={onCategoryPick} 
        onItemFormSubmit={onItemFormSubmit} 
      />
      <Filter 
        onCategoryChange={onCategoryChange} 
        onSearchChange={onSearchChange} 
        selectedCategory={selectedCategory} 
        searchText={searchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} 
            name={item.name} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
