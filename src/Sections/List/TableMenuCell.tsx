import { TableCell, Typography } from "@mui/material";
import React from "react";

const TableMenuCell = ({ name, price }) => {
  return (
    <>
      <TableCell component="th" scope="row">
        <Typography variant="body1">{name}</Typography>
      </TableCell>
      <TableCell align="right">{price}</TableCell>
    </>
  );
};
export default React.memo(TableMenuCell, () => true);
