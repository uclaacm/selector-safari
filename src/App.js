import React from 'react';
import './App.css';
import LevelNav from './LevelNav.js'
import LevelMenu from './LevelMenu.js'
import Build from './components/Build.js'
import Textbox from './components/Textbox'

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {minLevel} from "./constants/constants";


class App extends React.Component{
  state = {
      open: false,
      levelNum: minLevel
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  setLevel = (num) => {
      this.setState({
          levelNum: num
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
                          <LevelNav setLevel={this.setLevel} toggle={this.toggleOpen} show={this.state.open} levelNum={this.state.levelNum}></LevelNav>
                         )}
                  />

                  <Route path="/"
                         render={(props) => (
                             <LevelNav setLevel={this.setLevel} toggle={this.toggleOpen} show={this.state.open} levelNum={this.state.levelNum}></LevelNav>
                             )}
                  />


                </Switch>
              </div>
            </div>
            <LevelMenu show={this.state.open} setLevel={this.setLevel}/>
          </div>
        </BrowserRouter>
    );
  }
}
        // <Build level={levels[0]} top={"0px"} left = {"500px"}/>
   

export default App;
