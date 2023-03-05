import React, { useState, useEffect } from "react";

const ProductSearch = ({ formValue, shortByController }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const shortByHandleChange = (e) => {
    shortByController(e.target.value);
  };

  useEffect(() => {
    formValue(searchValue);
    //eslint-disable-next-line
  }, [searchValue]);

  return (
    <div className="productSearch">
      <div className="shortBy">
        <label htmlFor="shortBy">Short By : </label>
        <select name="shortBy" onChange={shortByHandleChange}>
          <option name="shortBy" value="">
            Select
          </option>
          <option name="shortBy" value="mostSold">
            Most Sold
          </option>
          <option name="shortBy" value="topRated">
            Top Rated
          </option>
          <option name="shortBy" value="bigDiscount">
            Big Discounts
          </option>
          <option name="shortBy" value="newProduct">
            New Products
          </option>
          <option name="shortBy" value="highQuality">
            High Quality
          </option>
        </select>
      </div>
      <div className="searchForm">
        <form>
          <input
            type="text"
            placeholder="Search Product Here"
            onChange={handleChange}
            value={searchValue}
            required
          />
        </form>
      </div>
    </div>
  );
};

export default ProductSearch;
