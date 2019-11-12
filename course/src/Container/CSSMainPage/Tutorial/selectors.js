import React,{Component} from 'react';
import '../style.css';
 
export default class CSSSelectors extends Component {
    render() {
        return(
        <div>
            <h1>CSS Selectors</h1>
            <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.
                We can divide CSS selectors into five categories:</p>
            <ul>
                <li>Simple selectors (select elements based on name, id, class).</li>
                <li>Combinator selectors (select elements based on a specific relationship between them).</li>
                <li>Pseudo-class selectors (select elements based on a certain state).</li>
                <li>Pseudo-elements selectors (select and style a part of an element).</li>
                <li>Attribute selectors (select elements based on an attribute or attribute value).</li>
            </ul>
            <p>This page will explain the most basic CSS selectors.</p>
            <h3>The CSS element Selector:</h3>
            <p>The element selector selects HTML elements based on the element name.</p>
            <pre className="intro_example">Example:
            p {'{'}
                text-align: center;
                color: red;
            }
            </pre>
            <h3>The CSS id Selector:</h3>
            <p>The id selector uses the id attribute of an HTML element to select a specific element.
                The id of an element is unique within a page, so the id selector is used to select one unique element!
                To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
            <pre className="intro_example">Example: 
            #para1 {'{'}
                text-align: center;
                color: red;
            }
            </pre>
            <h3>The CSS class Selector:</h3>
            <p>The class selector selects HTML elements with a specific class attribute.
                To select elements with a specific class, write a period (.) character, followed by the class name.</p>
            <pre className="intro_example">Example:
            .center {'{'}
                text-align: center;
                color: red;
            }
            </pre>
            <h3>The CSS Universal Selector:</h3>
            <p>The universal selector (*) selects all HTML elements on the page.</p>
            <pre className="intro_example">Example:
            * {'{'}
                text-align: center;
                color: blue;
            }
            </pre>
            <h3>The CSS Grouping Selector:</h3>
            <p>The grouping selector selects all the HTML elements with the same style definitions.
                Look at the following CSS code (the h1, h2, and p elements have the same style definitions):</p>
            <pre className="intro_example">
            h1, h2, p {'{'}
                text-align: center;
                color: red;
            }
            </pre>
        </div>
        );
    }
}