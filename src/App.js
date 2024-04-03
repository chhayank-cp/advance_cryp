import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import AES from "./pages/AES";
import Caesar from "./pages/Caesar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/test" exact Component={Test} />
          <Route path="/AES" exact Component={AES} />
          <Route path="/Caesar" exact Component={Caesar} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
