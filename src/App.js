import React from 'react';
import './App.css';
// import Textbox from './components/Textbox.js';
import Build from './components/Build.js'
import {levels} from './components/levels.js';

function App() {
  return (
    <div className="App">
        <Build level={levels[0]} top={"0px"} left = {"500px"}/>
    </div>
  );
}

export default App;
