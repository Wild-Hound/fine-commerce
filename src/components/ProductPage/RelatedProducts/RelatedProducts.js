import React, { useState, useEffect } from "react";

import Carousel from "react-elastic-carousel";

function RelatedProducts({ products, product, history }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    let x = [];
    products.forEach((pd) => {
      if (pd.category === product.category) {
        x.push(pd);
      }
    });
    setRelatedProducts([...x]);
  }, [product]);

  return (
    <Carousel itemsToShow={1} className="relatedProductWrapper">
      {relatedProducts?.map((rp) => {
        return (
          <div
            key={rp._id}
            className="relatedProduct"
            onClick={() => {
              console.log(`/product/${rp._id}`);
              history.push(`/product/${rp._id}`);
            }}
          >
            <img src={rp.image} className="relatedImage" />
            <h3 className="relatedName">{rp.name}</h3>
            <div className="relatedMeta">
              <span className="relatedCategory">{rp.category}</span>
              <span className="relatedPrice">{rp.price}</span>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default RelatedProducts;
