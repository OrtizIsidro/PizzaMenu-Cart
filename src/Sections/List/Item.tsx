import { Button, TableCell, TableRow } from "@mui/material";
import Quantity from "./Quantity.tsx";
import React from "react";
const SPECIAL_ITEMS = ["Mitad y mitad", "4 Gustos"];

const Item = ({
  item,
  updateQuantity,
  cleanQuantityFunctionRef,
  openDialog,
}) => {
  const handleAdd = (quantity) => updateQuantity({ ...item, quantity });
  const handleRemove = (quantity) => updateQuantity({ ...item, quantity });
  const isSpecial = SPECIAL_ITEMS.includes(item.name);
  return (
    <TableRow
      key={item.name + "h"}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {item.name}
      </TableCell>
      <TableCell align="right">{item.price}</TableCell>
      <TableCell align="center">
        {isSpecial ? (
          <Button variant="outlined" onClick={openDialog}>
            Elegir
          </Button>
        ) : (
          <Quantity
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            cleanQuantityFunctionRef={cleanQuantityFunctionRef}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default React.memo(Item, () => true);
