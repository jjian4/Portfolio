import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
    return (
        <Router>
            <ul className='navbar'>
                <li className='navItem'>
                    <Link to='/'>HOME</Link>
                </li>
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
