import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ResponsiveDiv from "./ResponsiveDiv";
import ItemsContainer from "./ItemsContainer";
import React from "react";

const Menu = ({
  category,
  items,
  updateQuantity,
  cleanQuantityFunctionRef,
}) => {
  return (
    <ResponsiveDiv category={category}>
      <Typography
        variant={"h3"}
        component={"h1"}
        color={"white"}
        sx={{ padding: "20px 0" }}
      >
        {category}
      </Typography>

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
          />
        </Table>
      </TableContainer>
    </ResponsiveDiv>
  );
};
export default React.memo(Menu, () => true);
