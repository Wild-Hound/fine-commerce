import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./AdminDashborad.module.scss";
import AccountsSection from "./AccountsSection/AccountsSection";
import OrdersSection from "./OrdersSection/OrdersSection";
import ComplaintsSection from "./ComplaintsSection/ComplaintsSection";

function AdmidDashborad() {
  const { id } = useParams();

  const content = () => {
    switch (id) {
      case "accounts":
        return <AccountsSection />;
      case "orders":
        return <OrdersSection />;
      case "complaints":
        return <ComplaintsSection />;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBar}>
        <h3 className={styles.heading}>Admin Dashboard</h3>
        <ul className={styles.links}>
          <Link to="/admin/accounts">Accounts</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/complaints">Complaints</Link>
        </ul>
      </div>
      <div className={styles.content}>{content()}</div>
    </div>
  );
}

export default AdmidDashborad;
