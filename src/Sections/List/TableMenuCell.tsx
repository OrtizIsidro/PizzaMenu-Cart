import { TableCell, Typography } from "@mui/material";
import React from "react";

const TableMenuCell = ({ name, price, isSpecial }) => {
  const nameLines = name.split(",%0A");
  const lastLineIndex = nameLines.length - 1;
  const isMixed = nameLines.length > 1;
  const color = (Math.random() * 100).toFixed(0);
  return (
    <>
      <TableCell component="th" scope="row" align="left">
        {nameLines.map((nameLine, index) => (
          <div key={nameLine + index}>
            <Typography variant="body1">
              {isSpecial && <strong>{nameLine}</strong>}
              {isMixed && (
                <strong style={{ color: `#004C${color}` }}>{nameLine}</strong>
              )}
              {!isSpecial && !isMixed && nameLine}
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
