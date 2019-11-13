import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Introduction from './Tutorial/introduction.js';
import Elements from './Tutorial/elements.js';
import Attributes from './Tutorial/attribute';
import Heading from './Tutorial/headings';
import Paragraph from './Tutorial/paragraph';
import Images from './Tutorial/images';

import Quiz from '../Quiz';

//data;
let attributequestions = [
    {question: "Which of the following is an attribute for <img> tag?", option1:"path", option2:"route",option3:"src",
     option4:"href", name:"img_tag", answer:"src"},
    {question: "Shouls attributes be in lower case?", option1:"strongly yes", option2:"yes",option3:"no",
     option4:"strongly no", name:"case_sensitive",answer:"strongly yes"},
    {question: "Which of the following attribute is used to add styles to the element?", option1:"style", option2:"design",option3:"color",
     option4:"img", name:"style_attribute",answer:"style"},
    {question: "What does HTML attributes do?", option1:"provides additional information", option2:"styling",option3:"simply",
     option4:"none of the above", name:"attribute_puspose",answer:"provides additional information"},
];
let elementsquestions = [
    {question: "Can we nest HTML elements?", option1:"strongly yes", option2:"yes",option3:"no",
 option4:"strongly no", name:"nesting", answer:"strongly yes"},
 {question: "What if we forget to end the tag?", option1:"better practice", option2:"produces unexpected results",option3:"error",
 option4:"performance issue", name:"end_tag", answer:"produces unexpected results"},
 {question: "Which of the following is an empty tag?", option1:"<p>", option2:"<html>",option3:"<br/>",
 option4:"<head>", name:"empty_tag", answer:"<br/>"},
 {question: "Is HTML elements case sensitive?", option1:"strongly yes", option2:"yes",option3:"no",
 option4:"strongly no", name:"case_sensitive", answer:"strongly no"},
]; 
let introductionquestions = [
    {question: "What does HTML stand for?", option1:"Hyper text make-up language", 
    option2:"Highly transperent make-up language language",option3:"Hyper text mark-up language",
    option4:"Hyper transfer mark-up language", name:"full_form", answer:"Hyper text mark-up language"},
    {question: "How is document type initialized in HTML5?", option1:"</DOCTYPE HTML>", option2:"</DOCTYPE>",option3:"<!DOCTYPE HTML>",
    option4:"</DOCTYPE html>", name:"doctype", answer:"<!DOCTYPE HTML>"},
    {question: "Which of the following characters indicate closing of a tag?", option1:".", option2:"/",option3:"?",
    option4:"!", name:"closing_tag", answer:"/"},
    {question: "Which tag is used for creating a paragraph?", option1:"<p>", option2:"<paragraph>",option3:"<para>",
    option4:"<text>", name:"paragraph", answer:"<p>"},
];
let headingquestions =[
    {question:"What does <h1> tag indicate?",option1:"Least important",option2:"Most important",
    option3:"Nothing",option4:"Header part",name:"h1_tag",answer:"Most important"},
    {question:"What does <h6> tag indicate?",option1:"Least important",option2:"Most important",
    option3:"Nothing",option4:"Header part",name:"h6_tag",answer:"Least important"},
    {question:"Why does search engines use heading tags?",option1:"to search content",option2:"to make attractive",
    option3:"to index the structure and content of your web pages",option4:"none of the above",
    name:"search_engine",answer:"index the structure and content of your web pages"},
    {question:"What does <hr/> tag do?",option1:"displays a horizontal line",option2:"creates header",
    option3:"nothing",option4:"creates a line break",name:"hr_tag",answer:"displays a horizontal line"},
    {question:"What does <head> tag contain?",option1:"content",option2:"tables",option3:"meta data",
    option4:"none of the above",name:"head_tag",answer:"meta data"},
];
let paragraphquestions =[
    {question:"What does <p> tag mean?",option1:"position",option2:"paragraph",option3:"paste",option4:"program"
    ,name:"p_tag",answer:"paragraph"},
    {question:"What does <pre> tag mean?",option1:"presentation",option2:"preformatted text",option3:"paragraph",
    option4:"prefered text",name:"pre_tag",answer:"preformatted text"},
    {question:"Is <br/> an empty tag?",option1:"strongly yes",option2:"yes",option3:"no",option4:"strongly no",
    name:"br_tag",answer:"strongly yes"},
];
let imagequestions =[
    {question:"Which tag is used to represent an image?",option1:"<image>",option2:"<img>",option3:"<picture>",
    option4:"<gif>",name:"img_tag",answer:"<img>"},
    {question:"Which of the following is an attribute of <img> tag:",option1:"href",option2:"link",option3:"src",
    option4:"path",name:"img_attribute",answer:"src"},
    {question:"Purpose of 'alt' attribute?",option1:"creates an alert",option2:"provides an alternate text for an image",
    option3:"alters an image",option4:"creates a link",name:"alt_attribute",answer:"provides an alternate text for an image"},
    {question:"Which of the following is the correct option to create an image:",option1:"<img src='url'/>",
    option2:"<img href='url'/>",option3:"<img alt='url'/>",option4:"<image href='url'>",name:"img_example",answer:"<img src='url'/>"},
];

const routes = [
    {
      path: "/introductiontutorial",
      exact: true,
      main: () => <Introduction/>
    },
    {
      path: "/introductionquiz",
      main: () => <Quiz questions={introductionquestions} totalquestions={4}/>
    },
    {
      path: "/elementtutorial",
      main: () => <Elements/>
    },
    {
        path: "/elementquiz",
        main: () => <Quiz questions={elementsquestions} totalquestions={4}/>
      },
      {
        path: "/attributetutorial",
        main: () => <Attributes/>
      },
      {
        path: "/attributequiz",
        main: () => <Quiz questions={attributequestions} totalquestions={4}/>
      },
      {
        path: "/headingtutorial",
        main: () => <Heading/>
      },
      {
        path: "/headingquiz",
        main: () => <Quiz questions={headingquestions} totalquestions={5}/>
      },
      {
        path: "/paragraphtutorial",
        main: () => <Paragraph/>
      },
      {
        path: "/paragraphquiz",
        main: () => <Quiz questions={paragraphquestions} totalquestions={3}/>
      },
      {
        path: "/imagetutorial",
        main: () => <Images/>
      },
      {
        path: "/imagequiz",
        main: () => <Quiz questions={imagequestions} totalquestions={4}/>
      },
  ];
export default class HTMLMainPage extends Component {
    render() {
        let HtmlTopics = [
            {text:"HTML Introduction",
            tutorial:"/introductiontutorial",
            quiz: "/introductionquiz"
        },
        {
            text: "HTML Elements",
            tutorial: "/elementtutorial",
            quiz : "/elementquiz"
        },
        {
            text: "HTML Attributes",
            tutorial: "/attributetutorial",
            quiz: "/attributequiz"
        },
        {
            text:"HTML Headings",
            tutorial: "/headingtutorial",
            quiz: "/headingquiz"
        },
        {
            text:"HTML Paragraphs",
            tutorial: "/paragraphtutorial",
            quiz:"/paragraphquiz"
        },
        {
            text:"HTML Images",
            tutorial: "/imagetutorial",
            quiz :"/imagequiz"
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