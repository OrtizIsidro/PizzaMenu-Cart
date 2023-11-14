import { Button } from "@mui/material";
import { useState, useEffect } from "react";
const Quantity = ({
  defaultQuantity,
  handleAdd,
  handleRemove,
  cleanQuantityFunctionRef,
}) => {
  const [quantity, setQuantity] = useState(defaultQuantity || 0);

  const increaseQuantity = () => {
    setQuantity((prev) => {
      const updated = (prev += 1);
      handleAdd(updated);
      return updated;
    });
  };

  const decreaseQuantity = () =>
    setQuantity((prev) => {
      if (prev <= 0) return prev;
      const updated = (prev -= 1);
      handleRemove(updated);
      return updated;
    });

  const cleanQuantity = () => {
    return setQuantity(0);
  };
  useEffect(() => {
    if (defaultQuantity) handleAdd(defaultQuantity);
    cleanQuantityFunctionRef.current.push(cleanQuantity);
  }, []);

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
