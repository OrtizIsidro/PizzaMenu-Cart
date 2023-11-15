import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import React from "react";
import Item from "./MenuItem";
import TableHeadM from "./TableHeadM";
interface MenuItem {
  name: string;
  price: number;
  quantity: number;
  id: number;
}
const TableMenu = ({
  items,
  increaseItemInCart,
  decreaseItemInCart,
  openDialog,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHeadM />
        <TableBody>
          {items.map((item: MenuItem) => (
            <Item
              increaseItemInCart={increaseItemInCart}
              decreaseItemInCart={decreaseItemInCart}
              item={item}
              key={item.id}
              openDialog={openDialog}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableMenu;
