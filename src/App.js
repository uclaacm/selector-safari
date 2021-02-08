import React from 'react';
import './App.css';
import Build from './components/Build.js'
import {levels} from './components/levels.js';

function App() {
  return (
    <div className="App">
        <Build level={levels[0]}/>
    </div>
  );
}

export default App;
