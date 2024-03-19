import "./App.css";
import Home from "./components/pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/navbar/Navbar.css";
import Navbar from "./components/navbar/Navbar.js";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
