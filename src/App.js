import React from 'react';
import './App.css';
import Main from './components/Main/Main';

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

class App extends React.Component{

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/level/:levelNum"
                render={(props) => (
                  <Main {...props}/>
                )}
              />
              <Route path="/"
                render={(props) => (
                  <Redirect to="/level/1"/>
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;