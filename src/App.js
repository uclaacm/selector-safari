import React from 'react';
import './App.css';
import Main from './components/Main/Main';

import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { maxLevel } from './constants/constants';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/level/:levelNum"
            render={(props) => {
              const currLevel = props.match.params.levelNum;
              if(currLevel > maxLevel || currLevel < 1){
                return <Redirect to="/level/1" />
              }
              else{
                return <Main {...props}/>
              }
            }}
          />      
        </div>
      </BrowserRouter>
    );
}

export default App;
