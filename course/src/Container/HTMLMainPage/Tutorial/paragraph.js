import React,{Component} from 'react';
import '../style.css';
 
export default class Paragraph extends Component {
    render() {
        return(
            <div>
                <h1>HTML Paragraphs</h1>
                <p>The HTML &lt;p> element defines a paragraph:</p>
                <p className="intro_example">Example: &lt;p>This is a paragraph.&lt;/p></p>
                <h3>HTML Display</h3>
                <p>You cannot be sure how HTML will be displayed.</p>
                <p>Large or small screens, and resized windows will create different results.</p>
                <p>With HTML, you cannot change the output by adding extra spaces or extra lines in your HTML code.
                    The browser will remove any extra spaces and extra lines when the page is displayed.</p>
                <h3>Don't Forget the End Tag</h3>
                <p>Most browsers will display HTML correctly even if you forget the end tag.
                Dropping the end tag can produce unexpected results or errors.
                </p>
                <h3>HTML Line Breaks</h3>
                <p>The HTML &lt;br> element defines a line break. Use &lt;br> if you want a line break (a new line) 
                    without starting a new paragraph.</p>
                <h3>The HTML &lt;pre> Element</h3>
                <p>The HTML &lt;pre> element defines preformatted text. The text inside a &lt;pre> element is displayed in a
                     fixed-width font (usually Courier), and it preserves both spaces and line breaks.</p>

            </div>
        );
    }
}