import { useState, useEffect } from "react";
import QuantityButtons from "./QuantityButtons";
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
  }, [defaultQuantity, cleanQuantityFunctionRef, handleAdd]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <QuantityButtons
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
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
