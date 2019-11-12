import React,{Component} from 'react';
import '../style.css';
 
export default class Heading extends Component {
    render() {
        return(
            <div>
                <h1>HTML Headings</h1>
                <p>Headings are defined with the &lt;h1> to &lt;h6> tags.</p>
               <p> &lt;h1> defines the most important heading. &lt;h6> defines the least important heading.</p>
               <p  className="intro_example">Example: &lt;h1>Hello World!!&lt;/h1></p>
               <h3>Headings Are Important:</h3>
               <p>Search engines use the headings to index the structure and content of your web pages.Users often skim 
                   a page by its headings. It is important to use headings to show the document structure.
                    &lt;h1> headings should be used for main headings, followed by &lt;h2> headings, then the less important
                     &lt;h3>, and so on.</p>
                <h3>Bigger Headings</h3>
                <p>Each HTML heading has a default size. However, you can specify the size for any heading with the 'style' 
                    attribute, using the CSS 'font-size' property.</p>
                <p className="intro_example">Example: &lt;h1 style="font-size:60px;">Heading 1&lt;/h1></p>
                <h3>HTML Horizontal Rules</h3>
                <p>The &lt;hr> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.
                    The &lt;hr> element is used to separate content (or define a change) in an HTML page:</p>
                <h3>The HTML &lt;head> Element</h3>
                <p>It is a container for metadata. HTML metadata is data about the HTML document. Metadata is not displayed.</p>
                <p>The &lt;head> element is placed between the &lt;html> tag and the &lt;body> tag:</p>
            </div>
        );
    }
}