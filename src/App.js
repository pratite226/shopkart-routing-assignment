import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
    <div>
      <Navbar />
        <Routes>
          {/* TODO: Implement Routing Here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
