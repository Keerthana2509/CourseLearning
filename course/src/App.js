import React from 'react';
import './App.css';
// import Header from './Component/Header';
// import Footer from './Component/Footer';
import HTMLMainPage from './Container/HTMLMainPage';

function App() {
  let HtmlTopics = ["HTML Introduction","HTML Elements","HTML Attributes","HTML Headings","HTML Paragraphs","HTML Styles"];
  return (
    <div>
      <HTMLMainPage topics={HtmlTopics}/>
    </div>
  );
}

export default App;
