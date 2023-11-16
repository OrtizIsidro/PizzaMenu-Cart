import {
  Button,
  Dialog as DialogMaterial,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import DialogItem from "./DialogItem";

const Dialog = ({
  isDialogOpen,
  closeDialog,
  items,
  confirmSelection,
  amountOfMixedItemsToLimitSelection,
}) => {
  const [selected, setSelected] = useState([]);

  const cleanSelectedItems = () => setSelected([]);

  const selectItem = (id) => {
    setSelected((prev) => {
      const newState = [...prev];
      if (newState.includes(id)) return newState.filter((F_Id) => F_Id !== id);
      if (newState.length >= amountOfMixedItemsToLimitSelection.current)
        newState.pop();
      return [...newState, id];
    });
  };

  const handleConfirm = () => {
    if (selected.length < 1) return handleCancel();
    const name = items
      .filter((item) => selected.includes(item.id))
      .map((item) => item.name)
      .join(",%0A");

    confirmSelection(name);
    cleanSelectedItems();
  };

  const handleCancel = () => {
    closeDialog();
    cleanSelectedItems();
  };

  const checkSelected = (item) => {
    const exists = selected.findIndex((id) => id === item.id);
    if (exists === -1) return false;
    return true;
  };
  return (
    <>
      <DialogMaterial open={isDialogOpen} onClose={handleCancel}>
        <DialogTitle>
          You can select {amountOfMixedItemsToLimitSelection.current} items
        </DialogTitle>
        <DialogContent>
          <ul style={{ margin: 0, padding: 0 }}>
            {items.map((item, index) => (
              <DialogItem
                selected={checkSelected(item)}
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
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </DialogMaterial>
    </>
  );
};
export default Dialog;
