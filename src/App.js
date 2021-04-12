import React from 'react';
import './App.css';
import LevelNav from './LevelNav.js'
import LevelMenu from './LevelMenu.js'


import { Route, BrowserRouter, Switch } from 'react-router-dom';


class App extends React.Component{
  state = { open: false }
  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className="Header">
              <span className="Title"> Selector Safari </span>
              <div className="NavButtons">
                <a href="#/" className="TutorialButton"> Tutorial </a>
                <Switch>
                  <Route path="/level/1"
                         render={(props) => (
                          <LevelNav toggle={this.toggleOpen} show={this.state.open} levelNum="1"></LevelNav>
                         )}
                  />
                  <Route path="/level/2"
                         render={(props) => (
                             <LevelNav toggle={this.toggleOpen} show={this.state.open} levelNum="2"></LevelNav>
                         )}
                  />
                  <Route path="/level/3"
                         render={(props) => (
                             <LevelNav toggle={this.toggleOpen} show={this.state.open} levelNum="3"></LevelNav>
                         )}
                  />
                  <Route path="/level/4"
                         render={(props) => (
                             <LevelNav toggle={this.toggleOpen} show={this.state.open} levelNum="4"></LevelNav>
                         )}
                  />
                  <Route path="/"
                         render={(props) => (
                             <LevelNav toggle={this.toggleOpen} show={this.state.open} levelNum="1"></LevelNav>
                             )}
                  />

                </Switch>
              </div>
            </div>
            <LevelMenu show={this.state.open}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
