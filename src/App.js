import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Router>  </Router>
      {/* TODO: Implement Routing Here */}
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
