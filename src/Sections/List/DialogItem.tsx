import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";

const DialogItem = ({ isDialogOpen, closeDialog, items }) => {
  const [dialogItems, setDialogItems] = useState(items);
  const confirmSelection = () => {
    const _items = dialogItems.filter((itemF) => itemF?.selected === true);
    console.log(_items);
  };
  const selectItem = (id) => {
    setDialogItems((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id);
      const newState = [...prev];
      newState[itemIndex].selected = !newState[itemIndex].selected;
      return newState;
    });
  };
  return (
    <>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Select Items</DialogTitle>
        <DialogContent>
          <ul>
            {items.map((item, index) => (
              <li
                key={item.name + index}
                style={{ listStyle: "none", padding: 0 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    checked={item.selected || false}
                    onChange={() => selectItem(item.id)}
                  />
                  <Typography variant="body1">{item.name}</Typography>
                </div>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmSelection} color="primary">
            Confirm
          </Button>
          <Button onClick={closeDialog} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DialogItem;
