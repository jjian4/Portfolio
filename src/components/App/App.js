import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import "./App.css";
import Home from "../Home/Home";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Projects2 from "../Projects2/Projects2";
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

        <Route exact path="/experience">
          <Experience />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/projects2">
          <Projects2 />
        </Route>

        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
