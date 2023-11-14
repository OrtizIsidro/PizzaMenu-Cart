import React, { useRef, useState } from "react";
import "./styles.css";
import ActionButtons from "./ActionButtons";
import Data from "./menuData.json";
import Menu from "./Menu";

const List = () => {
  const [cart, setCart] = useState([]);
  const cleanQuantityFunctionsRef = useRef([]);
  const cleanAddedItemsFunctionsRef = useRef([]);

  const updateQuantity = (item) =>
    setCart((prev) => {
      const newState = [...prev];

      const index = newState.findIndex((prevItem) => prevItem.id === item.id);
      if (index === -1) return [...prev, item];
      if (item.quantity === 0)
        return newState.filter((F_Item) => F_Item.id !== item.id);
      newState[index] = item;
      return newState;
    });

  const cleanCart = () => {
    if (cart.length < 1) return;
    cleanQuantityFunctionsRef.current.forEach((cleanQuantity) =>
      cleanQuantity()
    );
    cleanAddedItemsFunctionsRef.current.forEach((cleanAddedItems) =>
      cleanAddedItems()
    );
    setCart([]);
  };
  const total_price = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const sendOrder = () => {
    if (cart.length < 1) return;

    // Construct the message with cart items
    const orderMessage = `Detalles del pedido:%0A ${cart
      .map((item) => `${item.quantity}x ${item.name}`)
      .join("%0A")} %0A%0ATotal: ${total_price} (sin envio)`;

    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/+5491124589976?text=${orderMessage}`;

    // Open the link in a new window or redirect to it
    window.open(whatsappLink, "_blank");
  };

  const showButtons = cart.length > 0;

  return (
    <>
      {Data.map(({ category, items }, index) => (
        <Menu
          cleanAddedItemsFunctionsRef={cleanAddedItemsFunctionsRef}
          category={category}
          items={items}
          key={index}
          updateQuantity={updateQuantity}
          cleanQuantityFunctionRef={cleanQuantityFunctionsRef}
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
