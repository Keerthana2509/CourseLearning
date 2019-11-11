import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
 
export default class IntroductionQuiz extends Component {
    render() {
        return(
            <div>
                <h1 className="text-center">HTML QUIZ</h1>
                <ol className="block_style">
                    <li>
                        <h3>What does HTML stand for?</h3>
                        <input type="radio" name="full_form" value="Hyper text make-up language"/><label>Hyper text make-up language</label><br/>
                        <input type="radio" name="full_form" value="Highly transperent make-up language language"/><label>Hyper text make-up language</label><br/>
                        <input type="radio" name="full_form" value="Hyper text mark-up language"/><label>Hyper text make-up language</label><br/>
                        <input type="radio" name="full_form" value="Hyper transfer mark-up language"/><label>Hyper text make-up language</label><br/>
                    </li>
                    <li>
                        <h3>How is document type initialized in HTML5?</h3>
                        <input type="radio" name="doctype" value="</DOCTYPE HTML>"/><label>&lt;/DOCTYPE HTML&gt;</label><br/>
                        <input type="radio" name="doctype" value="</DOCTYPE>"/><label>&lt;/DOCTYPE&gt;</label><br/>
                        <input type="radio" name="doctype" value="<!DOCTYPE HTML>"/><label>&lt;!DOCTYPE HTML&gt;</label><br/>
                        <input type="radio" name="doctype" value="</DOCTYPE html>"/><label>&lt;/DOCTYPE html&gt;</label><br/>
                    </li>
                    <li>
                        <p>Which of the following characters indicate closing of a tag?</p>
                        <input type="radio" name="closing_tag" value="."/><label>.</label><br/>
                        <input type="radio" name="closing_tag" value="/"/><label>/</label><br/>
                        <input type="radio" name="closing_tag" value="\"/><label>\</label><br/>
                        <input type="radio" name="closing_tag" value="!"/><label>!</label><br/>
                    </li>
                    <li>
                        <p>Which tag is used for creating a paragraph?</p>
                        <input type="radio" name="paragraph" value="<p>"/><label> &lt;p&gt;</label><br/>
                        <input type="radio" name="paragraph" value="<paragraph>"/><label> &lt;paragraph&gt;</label><br/>
                        <input type="radio" name="paragraph" value="<para>"/><label>&lt;para&gt;</label><br/>
                        <input type="radio" name="paragraph" value="<text>"/><label>&lt;text&gt;</label><br/>
                    </li>
                </ol>
            </div>
        );
    }
}