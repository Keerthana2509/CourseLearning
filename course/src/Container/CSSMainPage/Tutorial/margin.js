import React,{Component} from 'react';
import '../style.css';
 
export default class CSSMargin extends Component {
    render() {
        return(
            <div>
                <h1>CSS Margin</h1>
                <p>The CSS 'margin' properties are used to create space around elements, outside of any defined borders.
                    With CSS, you have full control over the margins. There are properties for setting the margin for each 
                    side of an element (top, right, bottom, and left).</p>
                <h3>Margin - Individual Sides:</h3>
                <p>CSS has properties for specifying the margin for each side of an element:</p>
                <ul>
                    <li>margin-top</li>
                    <li>margin-rigth</li>
                    <li>margin-bottom</li>
                    <li>margin-left</li>
                </ul>
                <p>All the margin properties can have the following values:</p>
                <ul>
                    <li>auto - the browser calculates the margin</li>
                    <li>length - specifies a margin in px, pt, cm, etc.</li>
                    <li>% - specifies a margin in % of the width of the containing element</li>
                    <li>inherit - specifies that the margin should be inherited from the parent element</li>
                </ul>
                <p className="intro_example">Example: 
                p {'{'}
                    margin-top: 100px;
                    margin-bottom: 100px;
                    margin-right: 150px;
                    margin-left: 80px;
                }
                </p>
                <h3>Margin - Shorthand Property:</h3>
                <p>To shorten the code, it is possible to specify all the margin properties in one property.</p>
                <p className="intro_example">Example:
                p {'{ '}
                margin: 25px 50px 75px 100px;
                }
                </p>
                <h3>The auto Value:</h3>
                <p>You can set the margin property to 'auto' to horizontally center the element within its container.
                    The element will then take up the specified width, and the remaining space will be split equally 
                    between the left and right margins.</p>
                <p className="intro_example">Example:
                div {'{'}
                    width: 300px;
                    margin: auto;
                    border: 1px solid red;
                 }
                </p>
                <h3>Margin Collapse:</h3>
                <p>Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the
                    largest of the two margins.</p>
            </div>
        );
    }
}