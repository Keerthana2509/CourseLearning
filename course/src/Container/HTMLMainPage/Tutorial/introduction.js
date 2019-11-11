import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class Introduction extends Component {
    render() {
        return(
            <div>
                <h1>HTML Introduction</h1>
                <p>HTML is the standard markup language for creating Web pages.</p>
                <ul>
                    <li>HTML stands for Hyper Text Markup Language</li>
                    <li>HTML describes the structure of a Web page</li>
                    <li>HTML consists of a series of elements</li>
                    <li>HTML elements tell the browser how to display the content</li>
                    <li>HTML elements are represented by tags</li>
                    <li>HTML tags label pieces of content such as "heading", "paragraph", "table", and so on</li>
                    <li>Browsers do not display the HTML tags, but use them to render the content of the page</li>
                </ul>
                <h3>A Simple HTML Document:</h3>
                <p className="intro_example">
                    &lt;html&gt;<br/>
                    &lt;head&gt;<br/>
                    &lt;title&gt;Page Title&lt;/title&gt;<br/>
                    &lt;/head&gt;<br/>
                    &lt;body&gt;<br/>

                    &lt;h1&gt;My First Heading&lt;/h1&gt;<br/>
                    &lt;p&gt;My first paragraph.&lt;/p&gt;<br/>

                    &lt;/body&gt;<br/>
                    &lt;/html&gt;
                </p>
                <h3>Example Explained:</h3>
                <ul>
                    <li>The &lt;!DOCTYPE html&gt; declaration defines this document to be HTML5</li>
                    <li>The &lt;html&gt; element is the root element of an HTML page</li>
                    <li>The &lt;head&gt; element contains meta information about the document</li>
                    <li>The &lt;title&gt; element specifies a title for the document</li>
                    <li>The &lt;body&gt; element contains the visible page content</li>
                    <li>The &lt;h1&gt; element defines a large heading</li>
                    <li>The &lt;p&gt; element defines a paragraph</li>
                </ul>
            </div>
        );
    }
}