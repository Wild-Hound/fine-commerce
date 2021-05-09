import React from "react";

function CartItems({ cartList, setCartList }) {
  return (
    <div>
      {cartList.length < 1 ? (
        <h1>No items in cart</h1>
      ) : (
        cartList.map((item) => {
          return (
            <div key={item.id} className="checkOutItem">
              <img src={item.image} className="itemImg" />
              <div>
                <h2 className="itemHeader">{item.name}</h2>
                <p className="itemPrice">Price: {item.price}</p>
                <p className="itemCategory">Category: {item.category}</p>
                <p className="itemQuantity">Quantity: {item.quantity}</p>
              </div>
              <button>Close</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default CartItems;
