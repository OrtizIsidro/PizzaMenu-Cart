import {
  Button,
  Checkbox,
  Dialog as DialogMaterial,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DialogItem from "./DialogItem";

const Dialog = ({ isDialogOpen, closeDialog, items, confirmSelection }) => {
  const [D_Items, setD_Items] = useState([...items]);
  const selectItem = (id) => {
    setD_Items((prev) => {
      const updated = prev.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        } else {
          return item;
        }
      });
      return updated;
    });
  };
  const handleConfirm = () => {
    const name = D_Items.filter((item) => item.selected)
      .map((item) => item.name)
      .join(" || ");
    confirmSelection(name);
  };
  return (
    <>
      <DialogMaterial open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Select Items</DialogTitle>
        <DialogContent>
          <ul>
            {D_Items.map((item, index) => (
              <DialogItem
                item={item}
                selectItem={selectItem}
                key={item.name + index + "h"}
              />
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
          <Button onClick={closeDialog} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </DialogMaterial>
    </>
  );
};
export default Dialog;
