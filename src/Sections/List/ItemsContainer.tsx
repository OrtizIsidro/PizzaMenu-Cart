import { TableBody } from "@mui/material";
import Item from "./Item";
interface MenuItem {
  name: string;
  price: number;
  quantity: number;
  id: number;
}
const ItemsContainer = ({
  items,
  updateQuantity,
  cleanQuantityFunctionRef,
  openDialog,
}) => {
  return (
    <TableBody>
      {items.map((item: MenuItem, index) => (
        <Item
          item={item}
          key={index}
          updateQuantity={updateQuantity}
          openDialog={openDialog}
          cleanQuantityFunctionRef={cleanQuantityFunctionRef}
        />
      ))}
    </TableBody>
  );
};
export default ItemsContainer;
