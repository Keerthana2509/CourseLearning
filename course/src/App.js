import React from 'react';
import './App.css';
// import Header from './Component/Header';
// import Footer from './Component/Footer';
import HTMLMainPage from './Container/HTMLMainPage';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HTMLMainPage/>
    </div>
  );
}

export default App;
