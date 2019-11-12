import React,{Component} from 'react';
import '../style.css';
 
export default class BootstrapJumbotron extends Component {
    render() {
        return(
            <div>
                <h1>Bootstrap 4 Jumbotron</h1>
                <p>A jumbotron indicates a big grey box for calling extra attention to some special content or information.</p>
                <p>Use a &lt;div> element with class .jumbotron to create a jumbotron</p>
                <p className="intro_example">Example: <br/>
                    &lt;div class="jumbotron"><br/>
                    &lt;h1>Bootstrap Tutorial&lt;/h1><br/>
                    &lt;p>Bootstrap is the most popular HTML, CSS...&lt;/p><br/>
                    &lt;/div>
                </p>
                <h3>Full-width Jumbotron</h3>
                <p>If you want a full-width jumbotron without rounded borders, add the .jumbotron-fluid class and a .container 
                    or .container-fluid inside of it.</p>
                <p className="intro_example">Example: <br/>
                    &lt;div class="jumbotron jumbotron-fluid"><br/>
                    &lt;div class="container"><br/>
                    &lt;h1>Bootstrap Tutorial&lt;/h1><br/>
                    &lt;p>Bootstrap is the most popular HTML, CSS...&lt;/p><br/>
                    &lt;/div><br/>
                    &lt;/div>
                </p>
            </div>
        );
    }
}