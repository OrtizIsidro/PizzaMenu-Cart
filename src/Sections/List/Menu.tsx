import ResponsiveDiv from "./ResponsiveDiv";
import React, { useMemo, useRef, useState } from "react";
import Dialog from "./Dialog.tsx";
import TableMenu from "./TableMenu";
import { MIXED_ITEMS } from "./helpers.js";
import { nanoid } from "nanoid";
import Category from "./Category.tsx";

const Menu = ({
  category,
  items,
  increaseItemInCart,
  decreaseItemInCart,
  addMixedItemToCart,
  addedItemsIds,
}) => {
  const [dialog, setDialog] = useState(false);
  const amountOfMixedItemsToLimitSelection = useRef(0);
  const priceRef = useRef(0);

  const closeDialog = () => setDialog(false);
  const openDialog = (price, amount) => {
    priceRef.current = price;
    amountOfMixedItemsToLimitSelection.current = amount;
    return setDialog(true);
  };

  const handleIncreaseItemInCart = (id) => increaseItemInCart(category, id);
  const handleDecreaseItemInCart = (id) => decreaseItemInCart(category, id);

  const confirmSelection = (name) => {
    const newItem = {
      name,
      id: nanoid(),
      quantity: 1,
      price: priceRef.current,
    };
    addMixedItemToCart(category, newItem);
    closeDialog();
  };

  const filteredDialogItems = useMemo(() => {
    return items.filter(
      (item) =>
        !MIXED_ITEMS.includes(item.name) && !addedItemsIds.includes(item.id)
    );
  }, []);

  return (
    <ResponsiveDiv>
      <Category category={category} />

      <TableMenu
        increaseItemInCart={handleIncreaseItemInCart}
        decreaseItemInCart={handleDecreaseItemInCart}
        items={items}
        openDialog={openDialog}
      />

      <Dialog
        closeDialog={closeDialog}
        isDialogOpen={dialog}
        items={filteredDialogItems}
        amountOfMixedItemsToLimitSelection={amountOfMixedItemsToLimitSelection}
        confirmSelection={confirmSelection}
      />
    </ResponsiveDiv>
  );
};
export default React.memo(Menu, (prev, next) => {
  for (let i = 0; i < prev.items.length; i++) {
    if (prev.items[i].quantity !== next?.items[i]?.quantity) {
      return false;
    }
  }
  return true;
});
