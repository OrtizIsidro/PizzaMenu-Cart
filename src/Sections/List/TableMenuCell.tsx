import { TableCell, Typography } from "@mui/material";
import React from "react";

const TableMenuCell = ({ name, price }) => {
  const nameLines = name.split(",%0A");
  const lastLineIndex = nameLines.length - 1;
  return (
    <>
      <TableCell component="th" scope="row" align="left">
        {nameLines.map((nameLine, index) => (
          <div key={nameLine + index}>
            <Typography variant="body1">
              {nameLines.length > 1 ? <strong>{nameLine}</strong> : nameLine}
            </Typography>
            {index !== lastLineIndex && (
              <span
                style={{
                  margin: 2,
                }}
              >
                -
              </span>
            )}
          </div>
        ))}
      </TableCell>
      <TableCell align="center">{price}</TableCell>
    </>
  );
};
export default React.memo(TableMenuCell, () => true);
