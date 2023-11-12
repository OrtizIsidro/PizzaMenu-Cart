import useWindowWidth from "../../hooks/useWindowWidth";

const ResponsiveDiv = ({ category, children }) => {
  const MIN_WIDTH = 866;

  const windowWidth = useWindowWidth();
  function calculateMargin(windowWidth) {
    const marginStyles = {
      default: "0 100px",
      smallWindow: "0 10px",
      largeWindow: "50px 30%",
    };
    if (windowWidth < MIN_WIDTH) {
      return marginStyles.smallWindow;
    } else if (windowWidth > 1600) {
      return marginStyles.largeWindow;
    } else {
      return marginStyles.default;
    }
  }
  return (
    <div
      key={category}
      style={{
        margin: calculateMargin(windowWidth),
      }}
    >
      {children}
    </div>
  );
};
export default ResponsiveDiv;
