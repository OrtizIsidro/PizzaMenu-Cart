import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
const TableHeadM = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            NOMBRE
          </Typography>
        </TableCell>
        <TableCell align="center">
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
  );
};
export default React.memo(TableHeadM, () => true);
