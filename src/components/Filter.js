import React from "react";

function Filter({ onCategoryChange, onSearchChange, searchText, selectedCategory }) {

  function handleSearch(event) {
    onSearchChange(event.target.value);
  }

  function handleChange(event) {
    onCategoryChange(event.target.value);
  }
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleSearch} value={searchText}/>
      <select name="filter" onChange={handleChange} value={selectedCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
