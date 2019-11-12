import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//HTML Tutorial pages  
import BootstrapTypography from './Tutorial/typography';
import BootstrapColor from './Tutorial/color';
import BootstrapTable from './Tutorial/tables';
import BootstrapImage from './Tutorial/images';
import BootstrapJumbotron from './Tutorial/jumbotron';

//HTML Quiz Pages
//import IntroductionQuiz from './Quiz/introductionquiz.js';
 const routes = [
     {
      path: "/typography",
      exact: true,
      main: () => <BootstrapTypography/>
     },
//     {
//       path: "/hqi",
//       main: () => <IntroductionQuiz/>
//     },
     {
       path: "/color",
       main: () => <BootstrapColor/>
     },
//     {
//         path: "/hqe",
//         main: () => <ElementsQuiz/>
//       },
       {
         path: "/table",
         main: () => <BootstrapTable/>
       },
//       {
//         path: "/hqa",
//         main: () => <AttributesQuiz/>
//       },
       {
         path: "/image",
         main: () => <BootstrapImage/>
       },
      {
        path: "/jumbotron",
        main: () => <BootstrapJumbotron/>
      },
    ];
export default class BootstrapMainPage extends Component {
    render() {
        let HtmlTopics = [
            {text:"Bootstrap Typography",
            tutorial:"/typography",
            quiz: "/hqi"
        },
        {
            text: "Bootstrap Colors",
            tutorial: "/color",
            quiz : "/hqe"
        },
        {
            text: "Bootstrap Tables",
            tutorial: "/table",
            quiz: "/hqa"
        },
        {
            text:"Bootstrap Images",
            tutorial: "/image",
            quiz: ""
        },
        {
            text:"Bootstrap Jumbotron",
            tutorial: "/jumbotron",
            quiz:""
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