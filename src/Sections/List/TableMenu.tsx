import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ItemsContainer from "./ItemsContainer";
import React from "react";

const TableMenu = ({
  items,
  updateQuantity,
  cleanQuantityFunctionRef,
  openDialog,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <strong>NOMBRE</strong>
            </TableCell>
            <TableCell align="right">
              <strong>PRECIO</strong>
            </TableCell>
            <TableCell align="center">
              <strong>CANTIDAD</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <ItemsContainer
          items={items}
          updateQuantity={updateQuantity}
          cleanQuantityFunctionRef={cleanQuantityFunctionRef}
          openDialog={openDialog}
        />
      </Table>
    </TableContainer>
  );
};
export default React.memo(TableMenu, () => true);
