import React from "react";
import styles from "./ProfileSection.module.scss";
import img from "../../../Images/pro.jpg";

function ProfileSection() {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profileCard}>
        <div className={styles.proImg}>
          <img src={img} />
        </div>
        <div className={styles.meta}>
          <h2>
            <span>User Name:</span> Wild-Hound-404
          </h2>
          <h2>
            <span>Email:</span> yasinkhan4008@gmail.com
          </h2>
        </div>
        <div className={styles.adressDetails}>
          <div className={styles.col}>
            <p>Street Adress: N/A</p>
            <p>Post Code: N/A</p>
          </div>
          <div className={styles.col}>
            <p>Country: N/A</p>
            <p>City: N/A</p>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
