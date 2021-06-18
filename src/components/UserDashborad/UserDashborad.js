import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./UsedDashborad.module.scss";
import ProfileSection from "./ProfileSection/ProfileSection";
import HistorySection from "./HistorySection/HistorySection";

function UserDashborad() {
  const { id } = useParams();

  function window(id) {
    switch (id) {
      case "user":
        return <ProfileSection />;
      case "history":
        return <HistorySection />;
      case "temp":
        return <p>This is Temp</p>;
    }
  }

  console.log(id);
  return (
    <div className={styles.dashBoradWrapper}>
      <div className={styles.sideBar}>
        <ul className={styles.menuWrapper}>
          <Link to="/profile/user">
            <li className={styles.menuItem}>Profile</li>
          </Link>
          <Link to="/profile/history">
            <li className={styles.menuItem}>Order History</li>
          </Link>
          <Link to="/profile/temp">
            <li className={styles.menuItem}>Temp</li>
          </Link>
        </ul>
      </div>
      <div className={styles.contentArea}>{window(id)}</div>
    </div>
  );
}

export default UserDashborad;
