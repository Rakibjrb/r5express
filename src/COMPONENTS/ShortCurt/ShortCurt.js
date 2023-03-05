import React, { useState, useEffect } from "react";
import { categories } from "./extraData";
import { prices } from "./extraData";

const ShortCurt = (props) => {
  const [shippingValue, setShippingValue] = useState("free");

  useEffect(() => {
    props.forshippingValue(shippingValue);
    //eslint-disable-next-line
  }, [shippingValue]);

  return (
    <div className="leftDiv">
      <div className="categoriesDiv">
        <h2>Categories</h2>
        {categories.map((categorie) => {
          const { id, name, checkbox } = categorie;
          return (
            <div key={id}>
              {checkbox}
              <label>{name}</label>
            </div>
          );
        })}
      </div>
      <div className="pricesDiv">
        <h2>Price Range</h2>
        {prices.map((p) => {
          const { id, price, radio } = p;
          return (
            <div key={id}>
              {radio}
              <label>{price}</label>
            </div>
          );
        })}
      </div>
      <div className="shippingOptionDiv">
        <h2>Shipping Method</h2>
        <div>
          <input
            type="radio"
            value="Free"
            name="shippingValue"
            onChange={function (e) {
              setShippingValue(e.target.value);
            }}
          />
          <label>Free</label>
        </div>
        <div>
          <input
            type="radio"
            value="Paid"
            name="shippingValue"
            onChange={function (e) {
              setShippingValue(e.target.value);
            }}
          />
          <label>Paid</label>
        </div>
        <div>
          <input
            type="radio"
            value="All"
            name="shippingValue"
            onChange={function (e) {
              setShippingValue(e.target.value);
            }}
          />
          <label>All</label>
        </div>
      </div>
    </div>
  );
};

export default ShortCurt;
