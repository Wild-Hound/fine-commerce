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
        <input type="text" placeholder="First Name" id="fName" />
        <input type="text" placeholder="Last Name" id="lName" />
      </div>
      <input type="text" placeholder="Street Adress" id="street" />
      <input type="text" placeholder="City" id="city" />
      <Select options={options} placeholder="Country" id="country" />
      <input type="text" placeholder="Post Code" id="pCode" />
    </div>
  );
}

export default BillignForm;
