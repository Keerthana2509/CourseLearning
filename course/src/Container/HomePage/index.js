import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import DropdownButton from '../../Component/DropdownButton';
import './style.css';

export default class HomePage extends Component {
    render() {
        let dropdownItems = ["HTML","CSS","Bootstrap","JavaScript"];
        return(
            <div>
                <Header/>
                <div className="container page_position">
                <h1 className="text-center">LEARNING STUDIO</h1>
                <p>
                LearningStudio.com is an online learning platform aimed at professional adults and students. 
                LearningStudio, a portmanteau of you + academy, has more than 30 million students and 50,000
                instructors teaching courses in over 60 languages. There have been over 245 million course 
                enrollments. Students and instructors come from 190+ countries and 2/3 of students are located 
                outside of the U.S. LearningStudio also has over 4,000 enterprise customers and 80% of Fortune 
                100 companies use LearningStudio for employee upskilling (LearningStudio for Business). Students 
                take courses largely as a means of improving job-related skills. Some courses generate credit
                toward technical certification. LearningStudio has made a special effort to attract corporate 
                trainers seeking to create coursework for employees of their company.
                As of 2019, there are more than 130,000 courses on the website.
                </p>
                <h2>Overview</h2>
                <p>
                LearningStudio serves as a platform that allows instructors to build online courses on topics of 
                their choosing. Using LearningStudio's course development tools they can upload video, PowerPoint 
                presentations, PDFs, audio, zip files and live classes to create courses.[citation needed] Instructors
                can also engage and interact with users via online discussion boards.
                Courses are offered across a breadth of categories, including business and entrepreneurship, academics, 
                the arts, health and fitness, language, music, and technology.[citation needed] Most classes are in 
                practical subjects such as Excel software or using an iPhone camera. LearningStudio also offers 
                LearningStudio for Business, enabling businesses access to a targeted suite of over 3,000 training courses
                topics from digital marketing tactics to office productivity, design, management, programming, and more. 
                With LearningStudio for Business, organizations can also create custom learning portals for corporate training.
                LearningStudio offers paid and free courses, depending on the instructor. In 2015, the top 10 instructors 
                made more than $17 million in total revenue.
                In April 2013, LearningStudio offered an app for Apple iOS, allowing students to take classes directly from 
                iPhones; The Android version was launched in January 2014. As of January 2014, the iOS app had been 
                downloaded over 1 million times, and 20 percent of LearningStudio users access their courses via mobile. 
                In July 2016, LearningStudio expanded their iOS platform to include Apple TV.
                </p>
                <DropdownButton name="Start with.." dropdownitems={dropdownItems} />
                </div>
                <Footer/>
            </div>
        );
    }
}