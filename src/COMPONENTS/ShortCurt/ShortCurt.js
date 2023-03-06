import React, { useState, useEffect } from "react";

const ShortCurt = (props) => {
  const [shippingValue, setShippingValue] = useState("all");

  const handleChangeForName = (e) => {
    props.shortCurtName(e.target.value);
  };

  const categories = [
    {
      id: 66,
      name: "Headphones",
      checkbox: (
        <input
          onChange={handleChangeForName}
          type="radio"
          name="forShortCurt"
          value="headphone"
        />
      ),
    },
    {
      id: 88,
      name: "Smart Watch",
      checkbox: (
        <input
          type="radio"
          onChange={handleChangeForName}
          name="forShortCurt"
          value="watch"
        />
      ),
    },
    {
      id: 99,
      name: "Smart Glass",
      checkbox: (
        <input
          type="radio"
          onChange={handleChangeForName}
          name="forShortCurt"
          value="glass"
        />
      ),
    },
    {
      id: 11,
      name: "Mobile",
      checkbox: (
        <input
          type="radio"
          onChange={handleChangeForName}
          name="forShortCurt"
          value="mobile"
        />
      ),
    },
    {
      id: 22,
      name: "Telephone",
      checkbox: (
        <input
          type="radio"
          onChange={handleChangeForName}
          name="forShortCurt"
          value="mobile"
        />
      ),
    },
    {
      id: 33,
      name: "Television",
      checkbox: (
        <input
          type="radio"
          onChange={handleChangeForName}
          name="forShortCurt"
          value="television"
        />
      ),
    },
    {
      id: 55,
      name: "RC toys",
      checkbox: (
        <input
          type="radio"
          onChange={handleChangeForName}
          name="forShortCurt"
          value="rctoy"
        />
      ),
    },
    {
      id: 4374734,
      name: "Mixed All",
      checkbox: (
        <input
          type="radio"
          onChange={handleChangeForName}
          name="forShortCurt"
          value=""
        />
      ),
    },
  ];

  const forShortCurtPrice = (e) => {
    props.shortCurtPrice(e.target.value);
  };

  const prices = [
    {
      id: 11,
      price: "$0-$20",
      radio: (
        <input
          type="radio"
          value="20"
          onChange={forShortCurtPrice}
          name="priceRangInput"
        />
      ),
    },
    {
      id: 12,
      price: "$21-$50",
      radio: (
        <input
          type="radio"
          value="50"
          onChange={forShortCurtPrice}
          name="priceRangInput"
        />
      ),
    },
    {
      id: 13,
      price: "$51-$100",
      radio: (
        <input
          type="radio"
          value="100"
          onChange={forShortCurtPrice}
          name="priceRangInput"
        />
      ),
    },
    {
      id: 14,
      price: "$101-$500",
      radio: (
        <input
          type="radio"
          value="500"
          onChange={forShortCurtPrice}
          name="priceRangInput"
        />
      ),
    },
    {
      id: 15,
      price: "$501+",
      radio: (
        <input
          type="radio"
          value="501"
          onChange={forShortCurtPrice}
          name="priceRangInput"
        />
      ),
    },
  ];

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
