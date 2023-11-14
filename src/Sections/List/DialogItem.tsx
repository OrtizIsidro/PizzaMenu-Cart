import { Checkbox, Typography } from "@mui/material";
import React from "react";
const DialogItem = ({ item, selectItem, selected = false }) => {
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
          checked={selected || false}
          onChange={() => selectItem(item.id)}
        />
        <Typography variant="body1">{item.name}</Typography>
      </div>
    </li>
  );
};
export default React.memo(DialogItem, (prev, next) => {
  return prev.selected === next.selected;
});
