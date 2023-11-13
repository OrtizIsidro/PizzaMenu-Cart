import { Button } from "@mui/material";

const ActionButtons = ({ total_price, cleanCart, sendOrder }) => {
  return (
    <div
      style={{
        width: "80%",
        position: "fixed",
        top: 15,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Button variant="contained" onClick={cleanCart}>
        Limpiar
      </Button>

      <Button variant="contained">{total_price}</Button>

      <Button variant="contained" onClick={sendOrder}>
        Realizar pedido
      </Button>
    </div>
  );
};
export default ActionButtons;
