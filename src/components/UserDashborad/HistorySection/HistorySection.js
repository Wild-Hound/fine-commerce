import React from "react";
import styles from "./HistorySection.module.scss";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import PurchaseCard from "./PurchaseCard/PurchaseCard";

function HistorySection() {
  return (
    <div>
      <div className={styles.cardsHolder}>
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
      </div>
    </div>
  );
}

export default HistorySection;
