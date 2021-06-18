import React from "react";
import styles from "./BillignForm.module.scss";
import Select from "react-select";

function BillignForm() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className={styles.formWrapper}>
      <h1>Billign Details</h1>
      <div className={styles.gropedInputs}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Street Adress" />
      <input type="text" placeholder="City" />
      <Select options={options} placeholder="Country" />
      <input type="text" placeholder="Post Code" />
    </div>
  );
}

export default BillignForm;
