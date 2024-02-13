import React from "react";

const Buttons = ({ setFilteredData, ratingFiltered, filterItems, data }) => {
  return (
    <div>
      <button onClick={() => setFilteredData(data)}>All</button>
      <button onClick={ratingFiltered}>Rating 4.0+</button>
      <button onClick={() => filterItems("men's clothing")}>Mens</button>
      <button onClick={() => filterItems("women's clothing")}>Womens</button>
      <button onClick={() => filterItems("jewelery")}>Jewelry</button>
      <button onClick={() => filterItems("electronics")}>Electronics</button>
    </div>
  );
};

export default Buttons;
