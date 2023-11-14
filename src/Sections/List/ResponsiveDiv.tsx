import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";

const ResponsiveDiv = ({ children }) => {
  const MIN_WIDTH = 450;

  const windowWidth = useWindowWidth();
  function calculateMargin(windowWidth) {
    const marginStyles = {
      default: "0 15%",
      smallWindow: "0 5%",
      largeWindow: "50px 20%",
      smallerWindow: "0 0",
    };
    if (windowWidth < MIN_WIDTH) {
      return marginStyles.smallerWindow;
    } else if (windowWidth < 866) {
      return marginStyles.smallWindow;
    } else if (windowWidth > 1570) {
      return marginStyles.largeWindow;
    } else {
      return marginStyles.default;
    }
  }
  return (
    <div
      style={{
        margin: calculateMargin(windowWidth),
      }}
    >
      {children}
    </div>
  );
};
export default ResponsiveDiv;
