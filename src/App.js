import React from 'react';
import './App.css';
import LevelNav from './LevelNav.js'

import { Route, Link, BrowserRouter, Switch} from 'react-router-dom';


function App() {
  let levelNum = 1;

  return (
    <BrowserRouter>
      <div className="App">

        <div className="Header">
          <span className="Title"> Selector Safari </span>
          <a className="TutorialButton"> Tutorial </a>
          <Route path="/level/:levelNum" component={LevelNav}/>
        </div>

        <div className="Levels">
          <p>
            <Link to="/level/1"> Level 1 </Link>
          </p>
          <p>
            <Link to="/level/2"> Level 2 </Link>
          </p>
          <p>
            <Link to="/level/3"> Level 3 </Link>
          </p>
          <p>
            <Link to="/level/4"> Level 4 </Link>
          </p>
          <p>
            <Link to="/level/5"> Level 5 </Link>
          </p>
        </div>

      </div>
    </BrowserRouter>

);
}

export default App;
