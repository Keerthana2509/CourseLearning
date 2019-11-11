import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
 
export default class ElementsQuiz extends Component {
    render() {
        return(
            <div>
                <h1 className="text-center">HTML QUIZ</h1>
                <ol className="block_style">
                    <li>
                        <h3>Can we nest HTML elements</h3>
                        <input type="radio" name="nesting" value="strongly yes"/><label>strongly yes</label><br/>
                        <input type="radio" name="nesting" value="yes"/><label>yes</label><br/>
                        <input type="radio" name="nesting" value="no"/><label>no</label><br/>
                        <input type="radio" name="nesting" value="strongly no"/><label>strongly no</label><br/>
                    </li>
                    <li>
                        <h3>What if we forget to end the tag?</h3>
                        <input type="radio" name="end_tag" value="better practice"/><label>better practice</label><br/>
                        <input type="radio" name="end_tag" value="produces unexpected results"/><label>produces unexpected results</label><br/>
                        <input type="radio" name="end_tag" value="error"/><label>error</label><br/>
                        <input type="radio" name="end_tag" value="performance issue"/><label>performance issue</label><br/>
                    </li>
                    <li>
                        <p>Which of the following is an empty tag?</p>
                        <input type="radio" name="empty_tag" value="<p>"/><label> &lt;p&gt; </label><br/>
                        <input type="radio" name="empty_tag" value="<html>"/><label> &lt;html&gt;</label><br/>
                        <input type="radio" name="empty_tag" value="<br/>"/><label> &lt;br/&gt; </label><br/>
                        <input type="radio" name="empty_tag" value="<head>"/><label> &lt;head&gt; </label><br/>
                    </li>
                    <li>
                        <p>Is HTML elements case sensitive?</p>
                        <input type="radio" name="case_sensitive" value="strongly yes"/><label>strongly yes</label><br/>
                        <input type="radio" name="case_sensitive" value="yes"/><label>yes</label><br/>
                        <input type="radio" name="case_sensitive" value="no"/><label>no</label><br/>
                        <input type="radio" name="case_sensitive" value="strongly no"/><label>strongly no</label><br/>
                    </li>
                </ol>
            </div>
        );
    }
}