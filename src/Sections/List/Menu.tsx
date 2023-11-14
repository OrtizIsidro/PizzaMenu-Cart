import { Typography } from "@mui/material";
import ResponsiveDiv from "./ResponsiveDiv";
import React, { useEffect, useRef, useState } from "react";
import Dialog from "./Dialog.tsx";
import TableMenu from "./TableMenu";
import { SPECIAL_ITEMS } from "./helpers.js";

const Menu = ({
  category,
  items,
  updateQuantity,
  cleanQuantityFunctionRef,
  cleanAddedItemsFunctionsRef,
}) => {
  const [dialog, setDialog] = useState(false);
  const amountOfMixedItems = useRef(0);
  const priceRef = useRef(0);

  const closeDialog = () => setDialog(false);
  const openDialog = (price, amount) => {
    priceRef.current = price;
    amountOfMixedItems.current = amount;
    return setDialog(true);
  };

  const [addedItems, setAddedItems] = useState([]);
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

  const filteredDialogItems = items.filter(
    (item) => !SPECIAL_ITEMS.includes(item.name)
  );

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
        items={filteredDialogItems}
        amountOfMixedItems={amountOfMixedItems}
        confirmSelection={confirmSelection}
      />
    </ResponsiveDiv>
  );
};
export default React.memo(Menu, () => true);
