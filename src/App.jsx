import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Navbar,
  Projects,
  Skills,
  StarsCanvas,
} from "./components";
import "./styles/App.scss";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { generateThemeClasses } = useTheme();

  return (
    <BrowserRouter>
      <Navbar />
      <div className={`App ${generateThemeClasses()}`}>
        <About />
        <Skills />
        <Projects />
        <div className="canvas-app-ctn">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
