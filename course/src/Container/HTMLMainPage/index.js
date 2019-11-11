import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './style.css';
//import Introduction from './Tutorial/introduction.js';
//import Elements from './Tutorial/elements.js';

//import IntroductionQuiz from './Quiz/introductionquiz.js';
//import ElementsQuiz from './Quiz/elementsquiz';


export default class HTMLMainPage extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="row page_position">
                    <div className="col-3 nav_display">
                        {this.props.topics.map((topic) =>
                            <div>
                                <h4>{topic}</h4>
                                <a href="#!" className="link">Tutorials</a>
                                <a href="#!" className="link">Quiz</a>
                            </div>
                        )}
                    </div>
                    <div className="col-9 scrolling">
                        {/* <Introduction/> */}
                        {/* <IntroductionQuiz/> */}
                        {/* <Elements/>
                        <ElementsQuiz/> */}
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}