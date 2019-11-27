import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
    return (
        <Router>
            <div>
                <div className='navbar'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>

                <hr />

                {/* Renders Route where path matches current url */}
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
