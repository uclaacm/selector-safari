import React from 'react';
import './App.css';
import LevelNav from './LevelNav.js'
import LevelMenu from './LevelMenu.js'
import Build from './components/Build.js'
import Textbox from './components/Textbox'

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';


class App extends React.Component{
  state = {
      open: false,
  }

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
                  <Route path="/level/:levelNum"
                    render={(props) => (
                    <LevelNav toggle={this.toggleOpen} show={this.state.open} {...props}></LevelNav>
                    )}
                  />
                  <Route path="/"
                    render={(props) => (
                        <Redirect to="/level/1"/>
                        )}
                  />
                </Switch>
              </div>
            </div>
            <div className="columns">
              <div className="col">
                <div className="Description">
                  {}
                </div>
                <Textbox />
              </div>
              <Build level={levels[0]} top={"0px"} left={"500px"}/>
            </div>
            <LevelMenu show={this.state.open}/>
          </div>
        </BrowserRouter>
    );
  }
}
   

export default App;
