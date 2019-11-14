import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
  
import JSIntroduction from './Tutorial/introduction';
import JSSyntax from './Tutorial/syntax';
import JSComments from './Tutorial/comments';
import JSVariables from './Tutorial/variables';
import JSOperators from './Tutorial/operators';

import Quiz from '../Quiz';

let introductionquestion = [
    {question:"What does JS do?",option1:"Javascript creats styling for web pages",option2:"element positions",
    option3:"JavaScript Can Change HTML Content",option4:"none",name:"purpose",answer:"JavaScript Can Change HTML Content"},
    {question:"Which of the following is correct:",option1:"document.getElementById('demo').style.fontSize = '35px';",
    option2:"document.getElementsById('demo').style.fontSize = '35px';",option3:"getElementById('demo').style.fontSize = '35px';",
    option4:"document.getElementById('demo').fontSize = '35px';",name:"example",
    answer:"document.getElementById('demo').style.fontSize = '35px';"},
];
let syntaxquestions = [
    {question:"How to initialize variables?",option1:"var x, y, z;",option2:"int x, y, z;",option3:"x, y, z;",
    option4:"none",name:"initialize_variable",answer:"var x, y, z;"},
    {question:"How to assign a value to a variable",option1:"int=2;",option2:"x = 6;",option3:"6",option4:"none",
    name:"assign",answer:"x = 6;"},
];
let commentsquestions = [
    {question:"How to add single line comment",option1:"!",option2:"/",option3:"//",option4:"--",name:"single_line",answer:"//"},
    {question:"How to add multi line comments",option1:"//",option2:"<!--",option3:"/**/",option4:"///",name:"multi_line",answer:"/**/"},
];
let variablequestions = [
    {question:"How to initialize variables?",option1:"var x, y, z;",option2:"int x, y, z;",option3:"x, y, z;",
    option4:"none",name:"initialize_variable",answer:"var x, y, z;"},
    {question:"How to assign a value to a variable",option1:"int=2;",option2:"x = 6;",option3:"6",option4:"none",
    name:"assign",answer:"x = 6;"},
];
let operatorquestions = [
    {question:"Which is correct for addition",option1:"var z = x + y;",option2:"var z = x * y;",option3:"var z = x ++ y;",
    option4:"var z = x - y;",name:"addition",answer:"var z = x + y;"},
    {question:"Which is not equal to operator",option1:"not ==",option2:"===",option3:"=*",option4:"!=",name:"not_equal",answer:"!="},
];
 const routes = [
     {
      path: "/introduction",
      exact: true,
      main: () => <JSIntroduction/>
     },
    {
      path: "/introductionquiz",
      main: () => <Quiz questions={introductionquestion} totalquestions={2} topic="JS Introduction"/>
    },
     {
       path: "/syntax",
       main: () => <JSSyntax/>
     },
    {
        path: "/syntaxquiz",
        main: () => <Quiz questions={syntaxquestions} totalquestions={2} topic="JS Syntax"/>
      },
       {
         path: "/comment",
         main: () => <JSComments/>
       },
      {
        path: "/commentsquiz",
        main: () => <Quiz questions={commentsquestions} totalquestions={2} topic="JS Comments"/>
      },
       {
         path: "/variable",
         main: () => <JSVariables/>
       },
       {
        path: "/variablequiz",
        main: () => <Quiz questions={variablequestions} totalquestions={2} topic="JS Variables"/>
      },
      {
        path: "/operator",
        main: () => <JSOperators/>
      },
       {
         path: "/operatorquiz",
         main: () => <Quiz questions={operatorquestions} totalquestions={2} topic="JS Operators"/>
       }
   ];
export default class JavascriptMainPage extends Component {
    render() {
        let HtmlTopics = [
            {text:"JS Introduction",
            tutorial:"/introduction",
            quiz: "/introductionquiz"
        },
        {
            text: "JS Syntax",
            tutorial: "/syntax",
            quiz : "/syntaxquiz"
        },
        {
            text: "JS Comments",
            tutorial: "/comment",
            quiz: "/commentsquiz"
        },
        {
            text:"JS Variables",
            tutorial: "/variable",
            quiz: "/variablequiz"
        },
        {
            text:"JS Operators",
            tutorial: "/operator",
            quiz:"/operatorquiz"
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