import { Button } from "@mui/material";
import React from "react";

const QuantityButtons = ({ increaseQuantity, decreaseQuantity }) => {
  return (
    <>
      <Button color="primary" onClick={increaseQuantity}>
        <strong>+</strong>
      </Button>
      <Button color="secondary" onClick={decreaseQuantity}>
        <strong>-</strong>
      </Button>
    </>
  );
};
export default React.memo(QuantityButtons);
