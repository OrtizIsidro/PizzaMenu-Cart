import { Button, TableCell, TableRow } from "@mui/material";
import Quantity from "./Quantity.tsx";
import React from "react";
import { MIXED_ITEMS, AMOUNT_OF_MIXED_ITEMS } from "./helpers.js";
import TableMenuCell from "./TableMenuCell.tsx";

const Item = ({ item, increaseItemInCart, decreaseItemInCart, openDialog }) => {
  const isSpecial = MIXED_ITEMS.includes(item.name);
  const handleIncreaseItemInCart = () => increaseItemInCart(item.id);
  const handleDecreaseItemInCart = () => decreaseItemInCart(item.id);

  return (
    <TableRow
      key={item.name + "h"}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableMenuCell
        name={item.name}
        price={item.price}
        isSpecial={isSpecial}
      />
      <TableCell align="center">
        {isSpecial ? (
          <Button
            variant="outlined"
            onClick={() =>
              openDialog(item.price, AMOUNT_OF_MIXED_ITEMS[item.name])
            }
          >
            Elegir
          </Button>
        ) : (
          <Quantity
            defaultQuantity={item.quantity}
            increaseItemInCart={handleIncreaseItemInCart}
            decreaseItemInCart={handleDecreaseItemInCart}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default React.memo(
  Item,
  (prev, next) => prev.item.quantity === next.item.quantity
);
