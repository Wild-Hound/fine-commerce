import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import ProductCard from "./ProductCard/ProductCard";

function HomeArea() {
  const { products } = useContext(GlobalContext);
  return (
    <div>
      <div className="ProductsArea">
        {products?.map(({ _id, name, image, price, disc }) => {
          return (
            <ProductCard
              id={_id}
              name={name}
              img={image}
              price={price}
              disc={disc}
              key={_id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeArea;
