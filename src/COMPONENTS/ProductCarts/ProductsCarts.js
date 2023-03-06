import React from "react";

const ProductsCarts = (props) => {
  const {
    id,
    image,
    inStock,
    sold,
    price,
    rating,
    shipping,
    productName,
    productDescription,
  } = props.data;

  return (
    <>
      <article key={id.toString()}>
        <div className="childdiv">
          <h4>{inStock} in stock</h4>
          <hr />
          <h5>{sold} sold</h5>
        </div>
        <div className="maindiv">
          <img src={image} alt="ProductPicture" />
          <h3>{productName}</h3>
          <p>{productDescription}...</p>
          <h5>Price : {price}$</h5>
          <h5>Rating : {rating}</h5>
          <h5 style={{ color: "red" }}>Shipping : {shipping.toUpperCase()}</h5>
        </div>
        <button>Add To Cart</button>
      </article>
    </>
  );
};

export default ProductsCarts;
