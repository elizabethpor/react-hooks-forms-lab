import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onCategoryPick, newItemCategory, newItemName, onNewItemNameInput, onItemFormSubmit }) {


  function handleCategoryChange(event) {
    onCategoryPick(event.target.value);
  }

  function handleNameChange(event) {
    onNewItemNameInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newItemCategory,
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={event => handleSubmit(event)}>
      <label>
        Name:
        <input type="text" name="name" onChange={event => handleNameChange(event)} value={newItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={event => handleCategoryChange(event)} value={newItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
