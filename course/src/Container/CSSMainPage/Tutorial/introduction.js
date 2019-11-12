import React,{Component} from 'react';
import '../style.css';
 
export default class CSSIntroduction extends Component {
    render() {
        return(
            <div>
                <h1>CSS Introduction</h1>
                <ul>
                    <li>CSS stands for Cascading Style Sheets.</li>
                    <li>CSS describes how HTML elements are to be 
                        displayed on screen, paper, or in other media.</li>
                    <li>CSS saves a lot of work. It can control the 
                        layout of multiple web pages all at once.</li>
                    <li>External stylesheets are stored in CSS files.</li>
                </ul>
                <h3>Why Use CSS?</h3>
                <p>CSS is used to define styles for your web pages, including the
                     design, layout and variations in display for different devices 
                     and screen sizes. </p>
                <h3>CSS Solved a Big Problem</h3>
                <p>HTML was NEVER intended to contain tags for formatting a web page!
                    HTML was created to describe the content of a web page, like:</p>
                <p>&lt;h1>This is a heading&t;/h1></p>
                <p>&lt;p>This is a paragraph.&lt;/p></p>
                <p>When tags like &lt;font>, and color attributes were added to the HTML3.2 
                    specification, it started a nightmare for web developers. Development 
                    of large websites, where fonts and color information were added to every 
                    single page, became a long and expensive process. To solve this problem,
                     the World Wide Web Consortium (W3C) created CSS. CSS removed the style
                      formatting from the HTML page!</p>
                <h3>CSS Saves a Lot of Work!</h3>
                <p>The style definitions are normally saved in external .css files.
                    With an external stylesheet file, you can change the look of an entire 
                    website by changing just one file!</p>
            </div>
        );
    }
}