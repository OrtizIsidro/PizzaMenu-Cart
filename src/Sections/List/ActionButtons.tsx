import { Button } from "@mui/material";

const ActionButtons = ({ total_price, cleanCart, sendOrder }) => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {total_price}
      </Button>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(250%)",
        }}
        onClick={cleanCart}
      >
        Limpiar
      </Button>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-200%)",
        }}
        onClick={sendOrder}
      >
        Realizar pedido
      </Button>
    </div>
  );
};
export default ActionButtons;
