import QuantityButtons from "./QuantityButtons";
const Quantity = ({
  defaultQuantity,
  increaseItemInCart,
  decreaseItemInCart,
}) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <QuantityButtons
        decreaseQuantity={decreaseItemInCart}
        increaseQuantity={increaseItemInCart}
      />
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {defaultQuantity}
      </span>
    </div>
  );
};
export default Quantity;
