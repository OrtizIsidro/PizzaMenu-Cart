import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const DialogItem = ({
  handleConfirmSelection,
  isDialogOpen,
  closeDialog,
  selectedItems,
  handleItemSelection,
}) => {
  console.log(selectedItems);
  return (
    <>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Select Items</DialogTitle>
        <DialogContent>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={item.name + index}>
                <label>
                  <Checkbox
                    checked={item.selected || false}
                    onChange={() => handleItemSelection(item.name)}
                  />
                  {item.name}
                </label>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleConfirmSelection(selectedItems[0].name)}
            color="primary"
          >
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
