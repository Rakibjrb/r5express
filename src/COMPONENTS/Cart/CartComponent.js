import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cartdata } from "./cartData";

const CartComponent = () => {
  const [allCart] = useState(cartdata);
  const [filteredCart, setFilteredCart] = useState(allCart);
  const [counter, setCounter] = useState(0);

  const deleteHandler = (id) => {
    const productAfterDelete = filteredCart.filter((cart) => cart.id !== id);
    setFilteredCart(productAfterDelete);
  };

  return (
    <div className="cart">
      <div className="leftDiv">
        <div className="ldiv1">
          <h3>Shopping Cart [ 2 items ]</h3>
          <div>
            <div>
              <input type="checkbox" name="selectAllItems" />
              <label htmlFor="selectAllItems">Select All Items</label>
            </div>
            <button className="delBtn">
              <i className="far fa-trash-alt fa-2x"></i>
            </button>
            <NavLink className="shopMoreBtn" to="/Shop">
              Shop More
            </NavLink>
          </div>
        </div>
        {filteredCart.map((cd) => {
          const { id, cartProductIamge, title, shipping } = cd;
          return (
            <div className="cartProducts" id={id} key={id}>
              <input type="checkbox" />

              <img src={cartProductIamge} alt="cartProductpic" />
              <div>
                <h4>{title}</h4>
                <span>{shipping}</span>
              </div>
              <div>
                <button
                  onClick={() => {
                    deleteHandler(id);
                  }}
                  className="delBtn"
                >
                  <i className="far fa-trash-alt fa-2x"></i>
                </button>
                <div className="quantity">
                  <button
                    onClick={() => {
                      setCounter(counter - 1);
                    }}
                    disabled={counter === 0 ? true : false}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <h5>{counter}</h5>
                  <button
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                  >
                    <i className="fas fa-add"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="rightDiv">
        <div className="rightDiv1">
          <h3>Payment Summary</h3>
          <div>
            <p>Subtotal : </p>
            <p>$341.44</p>
          </div>
          <div>
            <p>Shipping Cost : </p>
            <p>$3.50</p>
          </div>
          <div>
            <p>Total Cost : </p>
            <p>$345.38</p>
          </div>
          <button>Pay Now</button>
        </div>
        <div className="rightDiv2">
          <h3>Available Payment Methods</h3>
          <div className="pay_icons">
            <i className="fa-brands fa-cc-visa fa-3x"></i>
            <i className="fa-brands fa-cc-apple-pay fa-3x"></i>
            <i className="fa-brands fa-cc-amex fa-3x"></i>
            <i className="fa-brands fa-cc-amazon-pay fa-3x"></i>
            <i className="fa-brands fa-cc-paypal fa-3x"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
