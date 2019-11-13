import React,{Component} from 'react';
import '../style.css';
 
export default class JSComments extends Component {
    render() {
        return(
            <div>
                <h1>JavaScript Comments</h1>
                <p>JavaScript comments can be used to explain JavaScript code, and to make it more readable.
                JavaScript comments can also be used to prevent execution, when testing alternative code.</p>
                <h3>Single Line Comments</h3>
                <p>Single line comments start with //.</p>
                <p>Any text between // and the end of the line will be ignored by JavaScript (will not be executed).</p>
                <p className="intro_example">Example: <br/>
                var x = 5;      // Declare x, give it the value of 5<br/>
                var y = x + 2;  // Declare y, give it the value of x + 2
                </p>
                <h3>Multi-line Comments</h3>
                <p>Multi-line comments start with /* and end with */.</p>
                <p>Any text between /* and */ will be ignored by JavaScript.</p>
                <p className="intro_example">Example: <br/>
                /*
                The code below will change<br/>
                the heading with id = "myH"<br/>
                and the paragraph with id = "myP"<br/>
                in my web page:<br/>
                */<br/>
                document.getElementById("myH").innerHTML = "My First Page";
                </p>
                <h3>Using Comments to Prevent Execution</h3>
                <p>Using comments to prevent execution of code is suitable for code testing. Adding // in front of a code 
                     changes the code lines from an executable line to a comment.</p>
                <p className="intro_example">Example: <br/>
                //document.getElementById("myH").innerHTML = "My First Page";<br/>
                document.getElementById("myP").innerHTML = "My first paragraph.";
                </p>
                <p>This example uses a comment block to prevent execution of multiple lines:</p>
                <p className="intro_example">
                /*<br/>
                document.getElementById("myH").innerHTML = "My First Page";<br/>
                document.getElementById("myP").innerHTML = "My first paragraph.";<br/>
                */
                </p>
            </div>
        );
    }
}