import React from 'react';
import './App.css';
import HomePage from './Container/HomePage';
import HTMLMainPage from './Container/HTMLMainPage';
import CSSMainPage from './Container/CSSMainPage';
import BootstrapMainPage from './Container/BootstrapMainPage';
import JavascriptMainPage from './Container/JavascriptMainPage';
import Report from './Container/Report';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
var fs = require('browserify-fs');
//Initially for text.txt
fs.writeFile('../text.txt','');
fs.unlink('../text.txt', function (err) {
       if (err) throw err;
       console.log('File deleted!');
     });

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage}/>
          <Route path={"/htmlpage"} component={HTMLMainPage}/>
          <Route path={"/csspage"} component={CSSMainPage}/>
          <Route path={"/bootstrappage"} component={BootstrapMainPage}/>
          <Route path={"/javascriptpage"} component={JavascriptMainPage}/>
          <Route path={"/report"} component={Report}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
