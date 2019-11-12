import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//HTML Tutorial pages  
import CSSIntroduction from './Tutorial/introduction.js';
import CSSSyntax from './Tutorial/syntax';
import CSSSelectors from './Tutorial/selectors';
import CSSBorder from './Tutorial/border';
import CSSMargin from './Tutorial/margin';
import CSSPadding from './Tutorial/padding';

//HTML Quiz Pages
//import IntroductionQuiz from './Quiz/introductionquiz.js';
 const routes = [
     {
      path: "/introduction",
      exact: true,
      main: () => <CSSIntroduction/>
     },
//     {
//       path: "/hqi",
//       main: () => <IntroductionQuiz/>
//     },
     {
       path: "/syntax",
       main: () => <CSSSyntax/>
     },
//     {
//         path: "/hqe",
//         main: () => <ElementsQuiz/>
//       },
       {
         path: "/selector",
         main: () => <CSSSelectors/>
       },
//       {
//         path: "/hqa",
//         main: () => <AttributesQuiz/>
//       },
       {
         path: "/border",
         main: () => <CSSBorder/>
       },
      {
        path: "/padding",
        main: () => <CSSPadding/>
      },
       {
         path: "/margin",
         main: () => <CSSMargin/>
       }
   ];
export default class CSSMainPage extends Component {
    render() {
        let HtmlTopics = [
            {text:"CSS Introduction",
            tutorial:"/introduction",
            quiz: "/hqi"
        },
        {
            text: "CSS Syntax",
            tutorial: "/syntax",
            quiz : "/hqe"
        },
        {
            text: "CSS Selectors",
            tutorial: "/selector",
            quiz: "/hqa"
        },
        {
            text:"CSS Borders",
            tutorial: "/border",
            quiz: ""
        },
        {
            text:"CSS Margins",
            tutorial: "/margin",
            quiz:""
        },
        {
            text:"CSS Padding",
            tutorial: "/padding",
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