import React, { useState } from "react";
import ShortCurt from "../ShortCurt/ShortCurt";
import ProductSearch from "../ProductSearch/ProductSearch";
import ProductsCarts from "../ProductCarts/ProductsCarts";
import { products } from "./products";

const Stock = () => {
  const [filterCartsD] = useState(products);
  const [filterCarts, setFilterCarts] = useState(filterCartsD);

  const forshippingValue = (value) => {
    if (value.toLowerCase() === "all") {
      setFilterCarts(filterCartsD);
    } else {
      const allfilterCarts = filterCartsD.filter(
        (filtered) => filtered.shipping === value.toLowerCase()
      );
      setFilterCarts(allfilterCarts);
    }
  };

  const formValue = (value) => {
    const searchText = value.toLowerCase();
    const searchedProduct = filterCartsD.filter((cart) => {
      const productsName = cart.productName.toLowerCase();
      return productsName.startsWith(searchText);
    });
    setFilterCarts(searchedProduct);
  };

  const shortByController = (controller) => {
    if (controller === "") {
      setFilterCarts(filterCartsD);
    } else {
      const shortProduct = filterCartsD.filter(
        (short) =>
          short.bigDiscount === controller ||
          short.mostSold === controller ||
          short.topRated === controller ||
          short.highQuality === controller ||
          short.newProduct === controller
      );
      setFilterCarts(shortProduct);
    }
  };

  return (
    <>
      <section id="stock">
        <ShortCurt forshippingValue={forshippingValue} />
        <div className="rightDivMain">
          <ProductSearch
            formValue={formValue}
            shortByController={shortByController}
          />
          <div className="cartGrid">
            {filterCarts.map((p) => {
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
              } = p;
              return (
                <ProductsCarts
                  key={id}
                  data={{
                    id,
                    image,
                    inStock,
                    sold,
                    price,
                    rating,
                    shipping,
                    productName,
                    productDescription,
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stock;
