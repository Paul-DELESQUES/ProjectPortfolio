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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
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
