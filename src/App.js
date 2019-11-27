import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
    return (
        <Router>
            <div className='navBar'>
                <div className='container'>
                    <span className='navItem logo'>
                        <Link to='/'>JAMES JIANG</Link>
                    </span>
                    <nav>
                        <ul className='navBarRight'>
                            <li className='navItem'>
                                <Link to='/about'>ABOUT</Link>
                            </li>
                            <li className='navItem'>
                                <Link to='/experience'>EXPERIENCE</Link>
                            </li>
                            <li className='navItem'>
                                <Link to='/projects'>PROJECTS</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Renders Route where path matches current url */}
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/experience'>
                    <Experience />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
