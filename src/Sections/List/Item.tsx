import { Button, TableCell, TableRow } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useCart, ACTIONS } from "./MenuContext.js";
import Quantity from "./Quantity.tsx";

const Item = ({ item, updateQuantity, cleanQuantityFunctionRef }) => {
  const handleAdd = (quantity) => updateQuantity({ ...item, quantity });
  const handleRemove = (quantity) => updateQuantity({ ...item, quantity });

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
        <>
          <Quantity
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            cleanQuantityFunctionRef={cleanQuantityFunctionRef}
          />
        </>
      </TableCell>
    </TableRow>
  );
};

export default Item;
