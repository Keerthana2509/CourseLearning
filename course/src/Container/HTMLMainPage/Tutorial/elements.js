import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class Elements extends Component {
    render() {
        return(
            <div>
                <h1>HTML Elements</h1>
                <p>An HTML element usually consists of a start tag and an end tag, with the content inserted in between:<br/>
                     &lt;tagname&gt;Content goes here...&lt;/tagname&gt;<br/>
                    The HTML element is everything from the start tag to the end tag</p>
                    <p>Example: &lt;p&gt;My first paragraph.&lt;/p&gt;</p>
                <h3>Nested HTML Elements:</h3>    
                <p>HTML elements can be nested (elements can contain elements).</p>
                <p>All HTML documents consist of nested HTML elements.</p>
                <p></p>
                <h3>Do Not Forget the End Tag</h3>
                <p>Some HTML elements will display correctly, even if you forget the end tag.Never rely on this.
                     It might produce unexpected results and/or errors if you forget the end tag.</p>
                <h3>Empty HTML Elements</h3>
                <p>HTML elements with no content are called empty elements.
                    &lt;br&gt; is an empty element without a closing tag (the &lt;br&gt; tag defines a line break)</p>
                <p>Empty elements can be "closed" in the opening tag like this: &lt;br /&gt;.
                    HTML5 does not require empty elements to be closed. But if you want stricter validation,
                     or if you need to make your document readable by XML parsers, you must close all HTML elements
                      properly.</p>
                <h3>HTML Is Not Case Sensitive:</h3>
                <p>HTML tags are not case sensitive: &lt;P&gt; means the same as &lt;p&gt;.</p>
            </div>
        );
    }
}