import React,{Component} from 'react';
import '../style.css';
 
export default class Attributes extends Component {
    render() {
        return(
            <div>
                <h1>HTML Attributes</h1>
                <ul>
                    <li>All HTML elements can have attributes</li>
                    <li>Attributes provide additional information about HTML elements.</li>
                    <li>Attributes are always specified in the start tag</li>
                    <li>Attributes usually come in name/value pairs like: name="value"</li>
                    <li>The HTML5 standard does not require lowercase attribute names.</li>
                    <li>he HTML5 standard does not require quotes around attribute values.</li>
                    <li>Double quotes around attribute values are the most common in HTML, but single quotes can also be 
                        used. In some situations, when the attribute value itself contains double quotes, it is necessary 
                        e single quotes.</li>
                </ul>
                <h3>The href Attribute:</h3>
                <p>HTML links are defined with the &lt;a&gt; tag. The link address is specified in the 'href' attribute:</p>
                <p className="intro_example">Example: &lt;a href="https://www.w3schools.com"&gt;This is a link&lt;/a&gt;</p>
                <h3>The src Attribute</h3>
                <p>HTML images are defined with the &lt;img> tag. The filename of the image source is specified in the 'src' attribute:</p>
                <p className="intro_example">Example: &lt;img src="img_girl.jpg"&gt;&lt;/img&gt;</p>
                <h3>The style Attribute:</h3>
                <p>The 'style' attribute is used to specify the styling of an element, like color, font, size etc.</p>
                <p className="intro_example">Example: &lt;p style="color:red"&gt;This is a paragraph.&lt;/p&gt;</p>
                <h3>The lang Attribute:</h3>
                <p>The language of the document can be declared in the &lt;html&gt; tag. The language is declared with the 'lang' attribute.
                    Declaring a language is important for accessibility applications (screen readers) and search engines:</p>
                <h3>The title Attribute:</h3>
                <p>Here, a title attribute is added to the &lt;p&gt; element. The value of the title attribute will be displayed as a tooltip
                     when you mouse over the paragraph:</p>
                <p className="intro_example">Example: &lt;p title="I'm a tooltip">This is a paragraph.&lt;/p></p>
            </div>
        );
    }
}