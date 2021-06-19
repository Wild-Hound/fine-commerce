import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../App";
import CartItems from "./CartItems/CartItems";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";
import BillignForm from "./BillingForm/BillignForm";

const { Step } = Steps;

function CheckOutArea() {
  const { cartList, setCartList } = useContext(GlobalContext);
  const [current, setCurrent] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  function removeItem(e, item) {
    let temp = cartList.filter((e) => e._id != item);
    setCartList([...temp]);
  }

  useEffect(() => {
    cartList.length >= 1 ? setIsDisabled(false) : setIsDisabled(true);
  }, [cartList]);

  const steps = [
    {
      title: "Cart",
      content: (
        <div className="cartItemsCon">
          <CartItems
            cartList={cartList}
            setCartList={setCartList}
            removeAct={removeItem}
          />
        </div>
      ),
    },
    {
      title: "Billing Details",
      content: <BillignForm />,
    },
    {
      title: "Payment",
      content: "Last-content",
    },
  ];

  function handleForm() {
    const getCountry = () => {
      try {
        return document.querySelector(".css-1uccc91-singleValue").innerText;
      } catch (err) {
        return undefined;
      }
    };

    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const country = getCountry();
    const pCode = document.getElementById("pCode").value;

    const infoWrapper = {
      FirstName: fName,
      LastName: lName,
      Street: street,
      City: city,
      Country: country,
      PostCode: pCode,
    };

    console.log(infoWrapper);
  }

  const next = () => {
    console.log(current);
    current == 1 && handleForm();
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="checkoutPageParentCon">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} disabled={isDisabled}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

export default CheckOutArea;
