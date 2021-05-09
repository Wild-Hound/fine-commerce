import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../App";
import CartItems from "./CartItems/CartItems";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

function CheckOutArea() {
  const { cartList, setCartList } = useContext(GlobalContext);
  const [current, setCurrent] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    cartList.length >= 1 ? setIsDisabled(false) : setIsDisabled(true);
  }, [cartList]);

  const steps = [
    {
      title: "Cart",
      content: (
        <div className="cartItemsCon">
          <CartItems cartList={cartList} setCartList={setCartList} />
        </div>
      ),
    },
    {
      title: "Billing Details",
      content: "Second-content",
    },
    {
      title: "Payment",
      content: "Last-content",
    },
  ];

  const next = () => {
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
