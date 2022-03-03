import React, { useContext } from "react";
import "./toggleMode.css";
import { toggleIcons } from "../data";
import { ThemeContext } from "../contex";

function ToggleMode(props) {
  const { sun, moon } = toggleIcons;
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggler">
      <img src={sun} alt="" className="sun toggler-icon" />
      <img src={moon} alt="" className="moon toggler-icon" />
      <div
        className="toggler-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 40 }}
      ></div>
    </div>
  );
}

export default ToggleMode;
