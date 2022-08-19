import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
    </div>
  );
};

export default Categories;
