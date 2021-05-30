import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import "./App.css";
import Home from "../Home/Home";
import AllProjects from "../AllProjects/AllProjects";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/projects">
          <AllProjects />
        </Route>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
