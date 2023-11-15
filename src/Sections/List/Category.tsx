import { Typography } from "@mui/material";
import React from "react";
const Category = ({ category }) => (
  <Typography
    variant={"h3"}
    component={"h1"}
    color={"white"}
    sx={{ padding: "20px 0" }}
  >
    {category}
  </Typography>
);
export default React.memo(Category, () => true);
