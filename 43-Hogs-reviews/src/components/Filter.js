import React, { Fragment } from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <select onChange={(e) => this.props.filterHogs(e.target.value)}>
          <option disabled selected>Select Filter</option>
          <option value="filter">Filter greased hogs</option>
          <option value="name">Sort by Name</option>
          <option value="weight">Sort by Weight</option>
        </select>
        <button onClick={() => this.props.showAllHogs()} > Show all hogs </button>
      </div>
    );
  }
}

export default Filter;
