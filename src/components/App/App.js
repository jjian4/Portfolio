import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import AllProjects from "../AllProjects/AllProjects";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/projects">
        <AllProjects />
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
