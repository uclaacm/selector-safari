import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Main from './components/Main/Main';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/level/:levelNum"
            render={(props) => (
              <Main {...props} />
            )}
          />
          <Route path="/"
            render={() => (
              <Redirect to="/level/1" />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
