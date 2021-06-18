import React from "react";
import styles from "./PurchaseCard.module.scss";

function PurchaseCard() {
  const itemMeta = (name, quantity, price) => {
    return (
      <div className={styles.itemMeta}>
        <p>
          <span>Name: </span>
          {name}
        </p>
        <p>
          <span>Quantity: </span>
          {quantity}
        </p>
        <p>
          <span>Price: </span>
          {price}
        </p>
      </div>
    );
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.time}>
        <h3>Purchase Date: 4/6/21</h3>
        <h3>Purchase Time: 2:30 PM</h3>
      </div>
      <div className={styles.itemListWrapper}>
        <h3>
          <span>Purchased Items</span>
        </h3>
        <div className={styles.itemList}>
          {itemMeta("product1", 1, "$24.38")}
          {itemMeta("product1", 1, "$24.38")}
          {itemMeta("product1", 1, "$24.38")}
          {itemMeta("product1", 1, "$24.38")}
        </div>
      </div>
    </div>
  );
}

export default PurchaseCard;
