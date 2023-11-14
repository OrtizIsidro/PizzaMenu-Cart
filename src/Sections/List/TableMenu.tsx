import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Item from "./MenuItem";
interface MenuItem {
  name: string;
  price: number;
  quantity: number;
  id: number;
}
const TableMenu = ({
  items,
  updateQuantity,
  cleanQuantityFunctionRef,
  openDialog,
  added,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                NOMBRE
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                PRECIO
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                CANTIDAD
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {added.map((item: MenuItem, index) => (
            <Item
              item={item}
              key={index}
              updateQuantity={updateQuantity}
              openDialog={openDialog}
              cleanQuantityFunctionRef={cleanQuantityFunctionRef}
            />
          ))}
          {items.map((item: MenuItem, index) => (
            <Item
              item={item}
              key={index}
              updateQuantity={updateQuantity}
              openDialog={openDialog}
              cleanQuantityFunctionRef={cleanQuantityFunctionRef}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default React.memo(TableMenu, (prev, next) => {
  return prev.added.length === next.added.length;
});
