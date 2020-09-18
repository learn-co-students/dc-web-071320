import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortState == "Alphabetically"} onChange={(e) => props.changeSortProp(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortState == "Price"} onChange={(e) => props.changeSortProp(e.target.value)}/>
        Price
      </label>
      <label>
      <input type="radio" value="All" checked={props.sortState == "All"} onChange={(e) => props.changeSortProp(e.target.value)}/>
        All
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=> props.changeFilterProp(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="All">All</option>

          
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
