import { Typography } from "@mui/material";
import ResponsiveDiv from "./ResponsiveDiv";
import React, { useEffect, useRef, useState } from "react";
import Dialog from "./Dialog.tsx";
import TableMenu from "./TableMenu";

const Menu = ({
  category,
  items,
  updateQuantity,
  cleanQuantityFunctionRef,
  cleanAddedItemsFunctionsRef,
}) => {
  const priceRef = useRef(0);
  const [dialog, setDialog] = useState(false);
  const openDialog = (price) => {
    priceRef.current = price;
    return setDialog(true);
  };

  const [addedItems, setAddedItems] = useState([]);
  const closeDialog = () => setDialog(false);

  const confirmSelection = (name) => {
    setAddedItems((prev) => {
      const newAdd = [...prev];
      const newItem = {
        name,
        price: priceRef.current,
        quantity: 1,
        id: (Math.random() * 100).toFixed(0),
      };
      return [...newAdd, newItem];
    });
    closeDialog();
  };
  const cleanAddedItems = () => setAddedItems([]);
  useEffect(() => {
    cleanAddedItemsFunctionsRef.current.push(cleanAddedItems);
  }, [cleanAddedItemsFunctionsRef]);
  return (
    <ResponsiveDiv>
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
        added={addedItems}
      />

      <Dialog
        closeDialog={closeDialog}
        isDialogOpen={dialog}
        items={items}
        confirmSelection={confirmSelection}
      />
    </ResponsiveDiv>
  );
};
export default React.memo(Menu, () => true);
