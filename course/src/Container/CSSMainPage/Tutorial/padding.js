import React,{Component} from 'react';
import '../style.css';
 
export default class CSSPadding extends Component {
    render() {
        return(
            <div>
                <h1>CSS Padding</h1>
                <p>The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
                    With CSS, you have full control over the padding. There are properties for setting the padding for each side of
                     an element (top, right, bottom, and left).</p>
                <h3>Padding - Individual Sides:</h3>
                <p>CSS has properties for specifying the padding for each side of an element:</p>
                <ul>
                    <li>padding-top</li>
                    <li>padding-rigth</li>
                    <li>padding-bottom</li>
                    <li>padding-left</li>
                </ul>
                <p>All the padding properties can have the following values:</p>
                <ul>
                    <li>length - specifies a padding in px, pt, cm, etc.</li>
                    <li>% - specifies a padding in % of the width of the containing element</li>
                    <li>inherit - specifies that the padding should be inherited from the parent element</li>
                </ul>
                <p className="intro_example">Example: 
                p {'{'}
                padding-top: 100px;
                padding-bottom: 100px;
                padding-right: 150px;
                padding-left: 80px;
                }
                </p>
                <h3>padding - Shorthand Property:</h3>
                <p>To shorten the code, it is possible to specify all the padding properties in one property.</p>
                <p className="intro_example">Example:
                p {'{ '}
                padding: 25px 50px 75px 100px;
                }
                </p>
            </div>
        );
    }
}