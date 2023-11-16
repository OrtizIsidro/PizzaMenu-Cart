import React, { useRef, useState, useEffect } from "react";
import ActionButtons from "./ActionButtons";
import Data from "./menuData.json";
import Menu from "./Menu";
import { getCategory } from "./helpers.js";

const List = () => {
  const [data, setData] = useState(Data);
  const cart = useRef([]);
  const mixedItemsAddedIds = useRef([]);

  const handleCart = (updatedItem) => {
    const cartItemIndex = cart.current.findIndex(
      (item) => item.id === updatedItem.id
    );
    if (cartItemIndex === -1)
      return (cart.current = [...cart.current, updatedItem]);

    if (updatedItem.quantity >= 1)
      return (cart.current[cartItemIndex] = updatedItem);
    const newCart = cart.current.filter((item) => item.id !== updatedItem.id);
    cart.current = newCart;
  };

  const addIdToMixedItemsAdded = (id) => mixedItemsAddedIds.current.push(id);
  const cleanIdsOnMixedItemsAdded = () => (mixedItemsAddedIds.current = []);
  const checkIfIdExistsOnMixedItems = (id) =>
    mixedItemsAddedIds.current.includes(id);
  const cleanCartRef = () => (cart.current = []);

  const addMixedItemToCart = (category, mixedItem) => {
    setData((prev) =>
      prev.map((menu) => {
        if (menu.category === category) {
          handleCart(mixedItem);
          const copy = [...menu.items];
          const specials = copy.slice(0, 2);
          const rest = copy.slice(2, menu.items.length);
          const items = [...specials, mixedItem, ...rest];
          addIdToMixedItemsAdded(mixedItem.id);
          return { ...menu, items };
        }
        return menu;
      })
    );
  };
  const increaseItemInCart = (category, id) => {
    const increase = (items) =>
      items.map((mapItem) => {
        if (mapItem.id !== id) return mapItem;
        const updatedItem = { ...mapItem, quantity: mapItem.quantity + 1 };
        handleCart(updatedItem);
        return updatedItem;
      });
    setData((prev) =>
      prev.map((item) => getCategory(item, category, increase))
    );
  };
  const decreaseItemInCart = (category, id) => {
    const decrease = (items) =>
      items.map((mapItem) => {
        if (mapItem.id !== id) return mapItem;
        const quantity = mapItem.quantity;
        if (quantity < 1) return mapItem;

        const udpatedItem = {
          ...mapItem,
          quantity: quantity - 1,
        };
        handleCart(udpatedItem);
        return udpatedItem;
      });
    const removeAddedItemsEqualToCero = (items) =>
      items.filter((item) => {
        const moreThanCero = item.quantity > 0;
        const exists = checkIfIdExistsOnMixedItems(item.id);
        return !exists || (exists && moreThanCero);
      });
    const decreaseAndRemove = (items) =>
      removeAddedItemsEqualToCero(decrease(items));

    setData((prev) =>
      prev.map((item) => getCategory(item, category, decreaseAndRemove))
    );
  };

  const cleanCart = () => {
    setData((prev) =>
      prev.map((categorys) => ({
        ...categorys,
        items: categorys.items
          .filter((item) => !checkIfIdExistsOnMixedItems(item.id))
          .map((item) => ({ ...item, quantity: 0 })),
      }))
    );
    cleanIdsOnMixedItemsAdded();
    cleanCartRef();
  };

  const total_price = cart.current.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const sendOrder = () => {
    if (cart.current.length < 1) return;

    // Construct the message with cart items
    const orderMessage = `Detalles del pedido:%0A%0A${cart.current
      .map(
        (item) => `${item.quantity} x ${item.name}%0A-precio: ${item.price}-`
      )
      .join("%0A%0A")} %0A%0ATotal: ${total_price} (sin envio)`;

    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/+5491124589976?text=${orderMessage}`;

    // Open the link in a new window or redirect to it
    window.open(whatsappLink, "_blank");
  };

  const showButtons = cart.current.length > 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.key === "z") cleanCart();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <>
      {data.map(({ category, items }) => (
        <Menu
          category={category}
          items={items}
          key={category}
          addedItemsIds={mixedItemsAddedIds.current}
          addMixedItemToCart={addMixedItemToCart}
          increaseItemInCart={increaseItemInCart}
          decreaseItemInCart={decreaseItemInCart}
        />
      ))}

      {showButtons && (
        <ActionButtons
          total_price={total_price}
          cleanCart={cleanCart}
          sendOrder={sendOrder}
        />
      )}
    </>
  );
};
export default List;
