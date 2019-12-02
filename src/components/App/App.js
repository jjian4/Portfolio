import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import { faEnvelope, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';

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

                <div className='footer'>
                    <div className='container'>
                        <div>
                            <a
                                title='Email'
                                href='mailto:jjian@umich.edu'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footerIcon'
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a
                                title='Github'
                                href='https://github.com/jjian4'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footerIcon'
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                title='Linkedin'
                                href='https://linkedin.com/in/jjian4/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footerIcon'
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a
                                title='Resume'
                                href={require('../../static/resume.pdf')}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footerIcon'
                            >
                                <FontAwesomeIcon icon={faPaperclip} />
                            </a>
                        </div>
                        <div className='footerCopyright'>
                            James Jiang &copy; 2019
                        </div>
                    </div>
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;
