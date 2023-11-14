import { Checkbox, Typography } from "@mui/material";
import React from "react";
const DialogItem = ({ item, selectItem }) => {
  return (
    <li style={{ listStyle: "none", padding: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox
          id="checkbox"
          checked={item?.selected || false}
          onChange={() => selectItem(item.id)}
        />
        <Typography variant="body1">{item.name}</Typography>
      </div>
    </li>
  );
};
export default React.memo(DialogItem, (prev, next) => {
  return prev.item.selected === next.item.selected;
});
