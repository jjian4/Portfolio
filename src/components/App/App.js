import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import './App.css';
import Home from '../Home/Home';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/experience'>
                    <Header />
                    <Experience />
                </Route>

                <Route exact path='/projects'>
                    <Header />
                    <Projects />
                </Route>

                {/* <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/experience' component={Experience} />
                <Route exact path='/projects' component={Projects} /> */}

                <Footer />
            </ScrollToTop>
        </Router>
    );
}

export default App;
