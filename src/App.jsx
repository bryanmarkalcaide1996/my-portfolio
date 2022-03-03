import Intro from "./components/Intro";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import ToggleMode from "./components/ToggleMode";
import { useContext } from "react";
import { ThemeContext } from "./contex";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <ToggleMode />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App;
