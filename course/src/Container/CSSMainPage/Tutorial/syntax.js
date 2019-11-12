import React,{Component} from 'react';
import '../style.css';
import Image from 'react-bootstrap/Image';
 
export default class CSSSyntax extends Component {
    render() {
        return(
            <div>
                <h1>CSS Syntax</h1>
                <p>A CSS rule-set consists of a selector and a declaration block.</p>
                <Image src="https://www.w3schools.com/css/selector.gif" width="200" height="300"/>
                <p>The selector points to the HTML element you want to style.The declaration block contains one or
                    more declarations separated by semicolons. Each declaration includes a CSS property name and a 
                    value, separated by a colon. A CSS declaration always ends with a semicolon, and declaration blocks
                     are surrounded by curly braces.</p>
                <h3>CSS Comments</h3>
                <p>Comments are used to explain the code, and may help when you edit the source code at a later date.
                    Comments are ignored by browsers.</p>
                <p>CSS coments starts with /* and ends with */</p>
            </div>
        );
    }
}