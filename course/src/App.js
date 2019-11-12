import React from 'react';
import './App.css';
import HomePage from './Container/HomePage';
import HTMLMainPage from './Container/HTMLMainPage';
import CSSMainPage from './Container/CSSMainPage';
import BootstrapMainPage from './Container/BootstrapMainPage';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage}/>
          <Route path={"/htmlpage"} component={HTMLMainPage}/>
          <Route path={"/csspage"} component={CSSMainPage}/>
          <Route path={"/bootstrappage"} component={BootstrapMainPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
