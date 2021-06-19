import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../App";
import ProductDisc from "./ProductDisc/ProductDisc";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useHistory } from "react-router-dom";

function ProductArea() {
  const history = useHistory();
  const { products, cartList, setCartList } = useContext(GlobalContext);
  const [product, setProduct] = useState({});
  // this is used to determine the text and function of buy button
  const [isSelected, setIsSelected] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    products.forEach((product) => {
      if (product._id === id) {
        setProduct(product);
      }
    });
  }, [id]);

  // this updates isSelected to if current product exists on cartlist
  useEffect(() => {
    //button text is set to
    //add_to_cart byy dfault
    let itemFound = false;
    cartList.forEach((cart) => {
      //button text is set to selected
      //it product id is found in cart list
      if (cart._id === product._id) {
        itemFound = true;
      }
    });
    itemFound ? setIsSelected(true) : setIsSelected(false);
  }, [cartList, product]);

  // if isSelected is false this will update cartlist
  const addToCartAction = (e, product) => {
    let x = product;
    // set product quantity on x object
    x.quantity = document.getElementById("productQuantity").value;
    //this controls the add_to_cart button
    if (isSelected) {
      //if item selected then its removed from
      //the cart list
      let temp = cartList.filter((item) => {
        if (item !== x) {
          return item;
        }
      });
      setCartList([...temp]);
    } else {
      //if item not selected then its added
      //to cart list
      setCartList([...cartList, x]);
    }
  };

  return (
    <div className="productArea">
      <ProductDisc
        product={product}
        addToCart={addToCartAction}
        // has conditional text based on isSelected
        btnText={isSelected ? "Selected" : "Add to cart"}
      />
      <RelatedProducts
        products={products}
        product={product}
        history={history}
      />
    </div>
  );
}

export default ProductArea;
