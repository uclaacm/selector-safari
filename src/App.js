import React from 'react';
import './App.css';
import Build from './components/Build.js'
import {levels} from './components/levels.js';

function App() {
  return (
    <div className="App">
        <Build level={levels[0]} top={"0px"}/>
        {/* <Build level={levels[1]} top={"0px"}/> */}
        <p> hello </p>
    </div>
  );
}

export default App;
