import { Button } from "@mui/material";
import { useState, useEffect } from "react";
const Quantity = ({
  handleAdd,
  handleRemove,
  cleanQuantityFunctionRef: cart,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prev) => {
      const updated = (prev += 1);
      handleAdd(updated);
      return updated;
    });
  };

  const decreaseQuantity = () =>
    setQuantity((prev) => {
      const updated = (prev -= 1);
      handleRemove(updated);
      return updated;
    });

  const cleanQuantity = () => setQuantity(0);
  console.log(cart.current);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Button color="primary" onClick={increaseQuantity}>
        <strong>+</strong>
      </Button>
      <Button color="secondary" onClick={decreaseQuantity}>
        <strong>-</strong>
      </Button>
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {quantity}
      </span>
    </div>
  );
};
export default Quantity;
