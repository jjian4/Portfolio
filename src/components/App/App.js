import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <div className='navBar'>
                    <div className='container navBarContainer'>
                        <div className='navItem logo'>
                            <Link to='/'>JAMES JIANG</Link>
                        </div>
                        <nav>
                            <ul className='navBarRight'>
                                <li className='navItem'>
                                    <NavLink
                                        exact
                                        to='/experience'
                                        activeClassName='navItemActive'
                                    >
                                        EXPERIENCE
                                    </NavLink>
                                </li>
                                <li className='navItem'>
                                    <NavLink
                                        exact
                                        to='/projects'
                                        activeClassName='navItemActive'
                                    >
                                        PROJECTS
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/about'>
                    <About />
                </Route>

                <Route exact path='/experience'>
                    <Experience />
                </Route>

                <Route exact path='/projects'>
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
