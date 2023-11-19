import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Navbar,
  Projects,
  Skills,
} from "./components";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
