import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//HTML Tutorial pages  
import Introduction from './Tutorial/introduction.js';
import Elements from './Tutorial/elements.js';
import Attributes from './Tutorial/attribute';
import Heading from './Tutorial/headings';
import Paragraph from './Tutorial/paragraph';
import Images from './Tutorial/images';
//HTML Quiz Pages
import IntroductionQuiz from './Quiz/introductionquiz.js';
import ElementsQuiz from './Quiz/elementsquiz';
import AttributesQuiz from './Quiz/attributesquiz';
const routes = [
    {
      path: "/introductiontutorial",
      exact: true,
      main: () => <Introduction/>
    },
    {
      path: "/introductionquiz",
      main: () => <IntroductionQuiz/>
    },
    {
      path: "/elementtutorial",
      main: () => <Elements/>
    },
    {
        path: "/elementquiz",
        main: () => <ElementsQuiz/>
      },
      {
        path: "/attributetutorial",
        main: () => <Attributes/>
      },
      {
        path: "/attributequiz",
        main: () => <AttributesQuiz/>
      },
      {
        path: "/headingtutorial",
        main: () => <Heading/>
      },
      {
        path: "/paragraphtutorial",
        main: () => <Paragraph/>
      },
      {
        path: "/imagetutorial",
        main: () => <Images/>
      }
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
            quiz: ""
        },
        {
            text:"HTML Paragraphs",
            tutorial: "/paragraphtutorial",
            quiz:""
        },
        {
            text:"HTML Images",
            tutorial: "/imagetutorial",
            quiz :""
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