import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import CSSIntroduction from './Tutorial/introduction.js';
import CSSSyntax from './Tutorial/syntax';
import CSSSelectors from './Tutorial/selectors';
import CSSBorder from './Tutorial/border';
import CSSMargin from './Tutorial/margin';
import CSSPadding from './Tutorial/padding';

import Quiz from '../Quiz';

//data
let introductionquestions = [
    {question:"CSS stands for?",option1:"Casteling spread sheet",option2:"cascading style sheet",
    option3:"common style sheet",option4:"corrupted spread sheet",name:"css_full_form",answer:"cascading style sheet"},
    {question:"Why do we need css",option1:"To create new web pages",option2:"to style an element",
    option3:"only for colouring",option4:"only for margin",name:"need",answer:"to style an element"},
];
let syntaxquestions = [
    {question:"Which of the following is the correct syntax:",option1:"{h1:color:blue;}",option2:"h1 {color:blue;}",
    option3:"h1[color]:blue;",option4:"h1->{color:'blue'}",name:"correct_syntax",answer:"h1 {color:blue;}"},
    {question:"Who to add comments in CSS",option1:"//This is a comment",option2:"/*This is a comment*/",
    option3:"<!--This is a comment-->",option4:"/this is a comment/",name:"css_comments",answer:"/*This is a comment*/"},
    {question:"HTML tag to add styles?",option1:"<css>",option2:"<script>",option3:"<style>",option4:"<head>",
    name:"html_styletag",answer:"<style>"},
];
let selectorquestions = [
    {question:"Which of the following is the correct example for 'element' selector",
    option1:"p {text-align: center; color: red; }",
    option2:"#para1 {text-align: center; color: red; }",option3:".center {text-align: center; color: red; }",
    option4:"* {text-align: center; color: blue; }",name:"element_selector",answer:"p {text-align: center; color: red; }"},
    {question:"Which of the following is the correct example for 'id' selector",
    option1:"p {text-align: center; color: red; }",
    option2:"#para1 {text-align: center; color: red; }",option3:".center {text-align: center; color: red; }",
    option4:"* {text-align: center; color: blue; }",name:"id_selector",answer:"#para1 {text-align: center; color: red; }"},
    {question:"Which of the following is the correct example for 'universal' selector",
    option1:"p {text-align: center; color: red; }",
    option2:"#para1 {text-align: center; color: red; }",option3:".center {text-align: center; color: red; }",
    option4:"* {text-align: center; color: blue; }",name:"univaersal_selector",answer:"* {text-align: center; color: blue; }"},
    {question:"Which of the following is the correct example for 'class' selector",
    option1:"p {text-align: center; color: red; }",
    option2:"#para1 {text-align: center; color: red; }",option3:".center {text-align: center; color: red; }",
    option4:"* {text-align: center; color: blue; }",name:"class_selector",answer:".center {text-align: center; color: red; }"},
    {question:"Which is the correct for grouping selector?",option1:"h1, h2, p {text-align: center; color: red; }",
    option2:"h1> h2> p {text-align: center; color: red; }",option3:"h1+ h2+ p {text-align: center; color: red; }",
    option4:"h1 h2 p {text-align: center; color: red; }",name:"grouping_selector",answer:"h1, h2, p {text-align: center; color: red; }"},
];
let borderquestions = [
    {question:"What does 'border' property do?",option1:"creates a box",option2:"creates a section",
    option3:"specify the style, width, and color of an element's border",option4:"none of the above",
    name:"border_purpose",answer:"specify the style, width, and color of an element's border"},
    {question:"What does 'dotted ' define",option1:"Defines a dotted border",option2:"Defines a dashed border",
    option3:"Defines a double border",option4:"Defines a solid border",name:"dotted_border",answer:"Defines a double border"},
    {question:"How to provide width to a border?",option1:"using 'width' property",option2:"using 'style' property",
    option3:"using 'border-width' property",option4:"using 'border' property",name:"border_width",answer:"using 'border-width' property"},
    {question:"Which of the following is correct example for shortend border property:",
    option1:"p {border:  red 10px solid; }",option2:"p >{border-style: 5px solid red; }",option3:"p {border: 5px solid red; }",
    option4:"none of the above",name:"example",answer:"p {border: 5px solid red; }"},
];
let marginquestions = [
    {question:"What does 'margin' property do?",option1:"used to create space around elements",option2:"creates a section",
    option3:"specify the style, width, and color of an element's border",option4:"none of the above",
    name:"margin_purpose",answer:"used to create space around elements"},
    {question:"What property is use to provide margin towards bottom",option1:"margin",option2:"margin-bottom",
    option3:"margin-top",option4:"margin-left",name:"margin_bottom",answer:"margin-bottom"},
    {question:"How do we set margin property to auto?",option1:"margin-bottom: auto;",option2:"margin: auto;",
    option3:"margin: automatic;",option4:"none",name:"margin_auto",answer:"margin: auto;"},
    {question:"Which of the following is correct example for shortand margin property:",
    option1:"p { margin: 25px 50px 75px 100px; }",option2:"p >{margin-style: 5px solid red; }",option3:"p { margin-rigth: 25px 50px 75px 100px; }",
    option4:"none of the above",name:"shortand",answer:"p { margin: 25px 50px 75px 100px; }"},
];
let paddingquestions = [
    {question:"What does 'padding' property do?",option1:"used to create space around element's content",option2:"creates a section",
    option3:"specify the style, width, and color of an element's border",option4:"none of the above",
    name:"padding_purpose",answer:"used to create space around element's content"},
    {question:"What property is use to provide padding towards bottom",option1:"padding",option2:"padding-bottom",
    option3:"padding-top",option4:"padding-left",name:"padding_bottom",answer:"padding-bottom"},
    {question:"Which of the following is correct example for shortand padding property:",
    option1:"p { padding: 25px 50px 75px 100px; }",option2:"p >{padding-style: 5px solid red; }",option3:"p { padding-rigth: 25px 50px 75px 100px; }",
    option4:"none of the above",name:"shortand",answer:"p { padding: 25px 50px 75px 100px; }"},
];

 const routes = [
     {
      path: "/introductiontutorial",
      exact: true,
      main: () => <CSSIntroduction/>
     },
    {
      path: "/introductionquiz",
      main: () => <Quiz questions={introductionquestions} totalquestions={3}/>
    },
     {
       path: "/syntaxtutorial",
       main: () => <CSSSyntax/>
     },
    {
        path: "/syntaxquiz",
        main: () => <Quiz questions={syntaxquestions} totalquestions={3}/>
      },
       {
         path: "/selectortutorial",
         main: () => <CSSSelectors/>
       },
      {
        path: "/selectorquiz",
        main: () => <Quiz questions={selectorquestions} totalquestions={5}/>
      },
       {
         path: "/bordertutorial",
         main: () => <CSSBorder/>
       },
       {
        path: "/borderquiz",
        main: () => <Quiz questions={borderquestions} totalquestions={4}/>
      },
      {
        path: "/paddingtutorial",
        main: () => <CSSPadding/>
      },
      {
        path: "/paddingquiz",
        main: () => <Quiz questions={paddingquestions} totalquestions={3}/>
      },
       {
         path: "/margintutorial",
         main: () => <CSSMargin/>
       },
       {
        path: "/marginquiz",
        main: () => <Quiz questions={marginquestions} totalquestions={4}/>
      },
   ];
export default class CSSMainPage extends Component {
    render() {
        let HtmlTopics = [
            {text:"CSS Introduction",
            tutorial:"/introductiontutorial",
            quiz: "/introductionquiz"
        },
        {
            text: "CSS Syntax",
            tutorial: "/syntaxtutorial",
            quiz : "/syntaxquiz"
        },
        {
            text: "CSS Selectors",
            tutorial: "/selectortutorial",
            quiz: "/selectorquiz"
        },
        {
            text:"CSS Borders",
            tutorial: "/bordertutorial",
            quiz: "/borderquiz"
        },
        {
            text:"CSS Margins",
            tutorial: "/margintutorial",
            quiz:"/marginquiz"
        },
        {
            text:"CSS Padding",
            tutorial: "/paddingtutorial",
            quiz :"/paddingquiz"
        },
    ];
        return(
            <div>
                <Header/>
                <Router>
                    <div className="row page_position">
                        <div className="col-3 nav_display scrolling">
                            {HtmlTopics.map((topic) =>
                                <div>
                                    <h4>{topic.text}</h4>
                                    <Link to={topic.tutorial} className="link">Tutorial</Link>
                                    <Link to={topic.quiz} className="link">Quiz</Link>
                                </div>
                            )}
                            <Switch>
                                {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                />
                                ))}
                            </Switch>
                        </div>
                        <div className="col-8 scrolling">
                            <Switch>
                                {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                                ))}
                            </Switch>
                        </div>
                    </div>
                </Router>
                <Footer/>
            </div>
        );
    }
}