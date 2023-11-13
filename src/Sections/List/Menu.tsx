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
import React, { useState } from "react";
import DialogItem from "./DialogItem";
import TableMenu from "./TableMenu";

const Menu = ({
  category,
  items,
  updateQuantity,
  cleanQuantityFunctionRef,
}) => {
  const [dialog, setDialog] = useState(false);
  const openDialog = () => setDialog(true);
  const closeDialog = () => setDialog(false);

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

      <TableMenu
        cleanQuantityFunctionRef={cleanQuantityFunctionRef}
        items={items}
        openDialog={openDialog}
        updateQuantity={updateQuantity}
      />

      <DialogItem
        closeDialog={closeDialog}
        isDialogOpen={dialog}
        items={items}
      />
    </ResponsiveDiv>
  );
};
export default React.memo(Menu, () => true);
