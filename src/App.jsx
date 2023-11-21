import { BrowserRouter } from "react-router-dom";
import { About, Contact, Navbar, Projects, Skills } from "./components";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
