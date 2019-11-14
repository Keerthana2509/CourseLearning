import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
 
import BootstrapTypography from './Tutorial/typography';
import BootstrapColor from './Tutorial/color';
import BootstrapTable from './Tutorial/tables';
import BootstrapImage from './Tutorial/images';
import BootstrapJumbotron from './Tutorial/jumbotron';

import Quiz from '../Quiz';

//data
let typographyquestions = [
    {question:"What is the default 'font-size' in Bootstrap?",option1:"18px",option2:"16px",option3:"12px",option4:"20px",name:"font_size",answer:"16px"},
    {question:"Why is <small> tag used",option1:"To create small paragraph",option2:"To create small link",
    option3:"To create a lighter, secondary text in any heading",option4:"To add emojies",name:"small_tag",
    answer:"used to create a lighter, secondary text in any heading"},
    {question:"<mark> tag creates a ?",option1:"yellow background color",option2:"mark on the text",
    option3:"underline the text",option4:"nothing",name:"mark_tag",answer:"yellow background color"},
    {question:"What does <abbr> tag create?",option1:"abbriviation",option2:"popup",option3:"dotted border bottom",
    option4:"none",name:"abbr_tag",answer:"dotted border bottom"},
];
let colorquestions = [
    {question:"How to set text color to 'primary'",option1:"color:primary",option2:"text-primary",
    option3:"primary",option4:"font-primary",name:"primary_color",answer:"text-primary"},
    {question:"How to cset background color in Bootstrap?",option1:"bg-*",option2:"background-*",
    option3:"bgcolor-*",option4:"background-color:*",name:"bg_color",answer:"bg-*"},
];
let tablequestions = [
    {question:"What does .table-striped class do?",option1:" adds zebra-stripes to a table",option2:"nothing",
    option3:"adds a column",option4:"adds a row",name:"striped",answer:" adds zebra-stripes to a table"},
    {question:"How to add hover effect on table rows",option1:".hover",option2:".hover-table",option3:".table-hover",
    option4:"table:hover",name:"hover",answer:".table-hover"},
    {question:"How to add a black background to the table?",option1:".table-black",option2:".table-#000",
    option3:".table-dark",option4:"table:black",name:"dark",answer:".table-dark"},
    {question:"What does .table-sm  do?",option1:"creates a small table",option2:"small text",option3:"small row",
    option4:"none",name:"small",answer:"creates a small table"},
];
let imagequestions = [
    {question:"Which classs is used to create rounded corners for an image",option1:".circle",option2:".radius",
    option3:".rounded",option4:".corner-round",name:"rounded_corner",answer:".rounded"},
    {question:"Which classs is used to create a circled image",option1:".round",option2:".rounded-circle",option3:".circle",
    option4:".rounded",name:"circle_image",answer:".rounded-circle"},
    {question:"Which classs is used to create a thumbnailed image",option1:".thumbnail",option2:".img-thumbnail",
    option3:".imagethumbnail",option4:".image-thumbnail",name:"thumbnail",answer:".img-thumbnail"},
    {question:"Which is used to align image to left:",option1:"<img src='paris.jpg' float:'left'/>",
    option2:"<img src='paris.jpg' class='float:left'/>",option3:"<img src='paris.jpg' class='left'/>",
    option4:"<img src='paris.jpg' class='float-left'/>",name:"image_left",answer:"<img src='paris.jpg' class='float-left'/>"},
];
let jumbotronquestions = [
    {question:"What is jumbotron?",option1:"a section",option2:"indicates a big grey box",option3:"a folder",
    option4:"indicates a green box",name:"jumbotron_meaning",answer:"indicates a big grey box"},
    {question:"Which is the correct option",option1:"<div class='jumbotron'>",option2:"<p class='jumbotron'>",
    option3:"<div jumbotron>",option4:"<img class='jumbotron'>",name:"example",answer:"<div class='jumbotron'>"},
];

 const routes = [
     {
      path: "/typographytutorial",
      exact: true,
      main: () => <BootstrapTypography/>
     },
    {
      path: "/typographyquiz",
      main: () => <Quiz questions={typographyquestions} totalquestions={4} topic="Bootstrap Typography"/>
    },
     {
       path: "/colortutorial",
       main: () => <BootstrapColor/>
     },
    {
        path: "/colorquiz",
        main: () => <Quiz questions={colorquestions} totalquestions={2} topic="Bootstrap Color" />
      },
       {
         path: "/tabletutorial",
         main: () => <BootstrapTable/>
       },
      {
        path: "/tablequiz",
        main: () => <Quiz questions={tablequestions} totalquestions={4} topic="Bootstrap Table"/>
      },
       {
         path: "/imagetutorial",
         main: () => <BootstrapImage/>
       },
       {
        path: "/imagequiz",
        main: () => <Quiz questions={imagequestions} totalquestions={4} topic="Bootstrap Image"/>
      },
      {
        path: "/jumbotrontutorial",
        main: () => <BootstrapJumbotron/>
      },
      {
        path: "/jumbotronquiz",
        main: () => <Quiz questions={jumbotronquestions} totalquestions={2} topic="Bootstrap Jumbotron"/>
      },
    ];
export default class BootstrapMainPage extends Component {
    render() {
        let HtmlTopics = [
            {text:"Bootstrap Typography",
            tutorial:"/typographytutorial",
            quiz: "/typographyquiz"
        },
        {
            text: "Bootstrap Colors",
            tutorial: "/colortutorial",
            quiz : "/colorquiz"
        },
        {
            text: "Bootstrap Tables",
            tutorial: "/tabletutorial",
            quiz: "/tablequiz"
        },
        {
            text:"Bootstrap Images",
            tutorial: "/imagetutorial",
            quiz: "/imagequiz"
        },
        {
            text:"Bootstrap Jumbotron",
            tutorial: "/jumbotrontutorial",
            quiz:"/jumbotronquiz"
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