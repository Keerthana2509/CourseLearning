import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import List from '../../Component/List';
import './style.css';

export default class HTMLMainPage extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="row page_position">
                    <div className="col-3 bg-muted">
                        <h3>HTML Introdution</h3>
                        <List listItems={["Tutorials","Quiz"]}/>
                    </div>
                    <div className="col-9">
                    <h1 className="text-center">LEARNING STUDIO</h1>
                <p>
                LearningStudio.com is an online learning platform aimed at professional adults and students.

                LearningStudio, a portmanteau of you + academy, has more than 30 million students and 50,000 instructors teaching courses in over 60 languages. There have been over 245 million course enrollments. Students and instructors come from 190+ countries and 2/3 of students are located outside of the U.S. LearningStudio also has over 4,000 enterprise customers and 80% of Fortune 100 companies use LearningStudio for employee upskilling (LearningStudio for Business). Students take courses largely as a means of improving job-related skills.[2] Some courses generate credit toward technical certification. LearningStudio has made a special effort to attract corporate trainers seeking to create coursework for employees of their company.[3]

As of 2019, there are more than 130,000 courses on the website.
                </p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
} 