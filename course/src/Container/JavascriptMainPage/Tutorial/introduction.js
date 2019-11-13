import React,{Component} from 'react';
import '../style.css';
 
export default class JSIntroduction extends Component {
    render() {
        return(
            <div>
                <h1>JavaScript Introduction</h1>
                <p>JavaScript Can Change HTML Content. One of many JavaScript HTML methods is 'getElementById()'.</p>
                <p>This example uses the method to "find" an HTML element (with id="demo") and changes the element 
                    content (innerHTML) to "Hello JavaScript":</p>
                <p className="intro_example">Example: <br/>
                document.getElementById("demo").innerHTML = "Hello JavaScript";
                </p>
                <h3>JavaScript Can Change HTML Attribute Values</h3>
                <p>In this example JavaScript changes the value of the 'src' (source) attribute of an &lt;img> tag:</p>
                <p className="intro_example">Example: <br/>
                &lt;button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light&lt;/button><br/>
                &lt;img id="myImage" src="pic_bulboff.gif" style="width:100px"><br/>
                &lt;button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light&lt;/button>
                </p>
                <h3>JavaScript Can Change HTML Styles (CSS)</h3>
                <p>Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>
                <p className="intro_example">Example: <br/>
                document.getElementById("demo").style.fontSize = "35px";
                </p>
                <h3>JavaScript Can Hide HTML Elements</h3>
                <p>Hiding HTML elements can be done by changing the display style:</p>
                <p className="intro_example">Example: <br/>
                document.getElementById("demo").style.display = "none";
                </p>
                <h3>JavaScript Can Show HTML Elements</h3>
                <p>Showing hidden HTML elements can also be done by changing the display style:</p>
                <p className="intro_example">Example: <br/>
                document.getElementById("demo").style.display = "block";
                </p>
            </div>
        );
    }
}