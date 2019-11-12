import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Base from '../../../Component/Button';
 
export default class AttributesQuiz extends Component {

    render() {
        return(
            <div>
                <h1 className="text-center">HTML QUIZ</h1>
                <ol className="block_style">
                    <li>
                        <h3>Which of the following is an attribute for &lt;img> tag?</h3>
                        <input type="radio" name="img_tag" value="path" /><label>path</label><br/>
                        <input type="radio" name="img_tag" value="route"/><label>route</label><br/>
                        <input type="radio" name="img_tag" value="src"/><label>src</label><br/>
                        <input type="radio" name="img_tag" value="href"/><label>href</label><br/>
                    </li>
                    <li>
                        <h3>Shouls attributes be in lower case?</h3>
                        <input type="radio" name="case_sensitive" value="strongly yes"/><label>strongly yes</label><br/>
                        <input type="radio" name="case_sensitive" value="yes"/><label>yes</label><br/>
                        <input type="radio" name="case_sensitive" value="no"/><label>no</label><br/>
                        <input type="radio" name="case_sensitive" value="strongly no"/><label>strongly no</label><br/>
                    </li>
                    <li>
                        <h3>Which of the following attribute is used to add styles to the element?</h3>
                        <input type="radio" name="style_attribute" value="style"/><label> style</label><br/>
                        <input type="radio" name="style_attribute" value="design"/><label> design</label><br/>
                        <input type="radio" name="style_attribute" value="color"/><label> color </label><br/>
                        <input type="radio" name="style_attribute" value="img"/><label> img </label><br/>
                    </li>
                    <li>
                        <h3>What does HTML attributes do?</h3>
                        <input type="radio" name="attribute_puspose" value="provides additional information"/><label>provides additional information</label><br/>
                        <input type="radio" name="attribute_puspose" value="styling"/><label>styling</label><br/>
                        <input type="radio" name="attribute_puspose" value="simply"/><label>simply</label><br/>
                        <input type="radio" name="attribute_puspose" value="none of the above"/><label>none of the above</label><br/>
                    </li>
                </ol>
                <div className="text-center">
                <Base variant="success" text="Finish"/> 
                </div>
            </div>
        );
    }
}