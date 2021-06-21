import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import ProductCard from "./ProductCard/ProductCard";
import ReactLoading from "react-loading";

function HomeArea() {
  const { products } = useContext(GlobalContext);
  return (
    <div>
      <div className="ProductsArea">
        {products.length ? (
          products?.map(({ _id, name, image, price, disc }) => {
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
          })
        ) : (
          <ReactLoading type="bars" color="#000" height={"5%"} width={"5%"} />
        )}
      </div>
    </div>
  );
}

export default HomeArea;
