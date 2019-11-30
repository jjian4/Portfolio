import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { faEnvelope, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <Router>
            <div className='navBar'>
                <div className='container navBarContainer'>
                    <div className='navItem logo'>
                        <Link to='/'>JAMES JIANG</Link>
                    </div>
                    <nav>
                        <ul className='navBarRight'>
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
                            href={require('./static/resume.pdf')}
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
        </Router>
    );
}

export default App;
