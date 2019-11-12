import React,{Component} from 'react';
import '../style.css';
 
export default class Images extends Component {
    render() {
        return(
            <div>
                <h1>HTML Images</h1>
                <p>Images can improve the design and the appearance of a web page.</p>
                <p className="intro_example">Example: &lt;img src="pic_trulli.jpg" alt="Italian Trulli">&lt;/img></p>
                <h3>HTML Images Syntax</h3>
                <p>In HTML, images are defined with the &lt;img> tag. The &lt;img> tag is empty, it contains attributes 
                    only, and does not have a closing tag.The src attribute specifies the URL of the image.</p>
                <p className="intro_example">Example: &lt;img src="url"/></p>
                <h3>The alt Attribute</h3>
                <p>The 'alt' attribute provides an alternate text for an image, if the user for some reason cannot view 
                    it (because of slow connection, an error in the 'src' attribute, or if the user uses a screen reader).
                    The value of the 'alt' attribute should describe the image</p>
                <p className="intro_example">Example: &lt;img src="img_chania.jpg" alt="Flowers in Chania"/></p>
                <p>If a browser cannot find an image, it will display the value of the alt attribute.</p>
                <h3>Image Size - Width and Height</h3>
                <p>You can use the 'style' attribute to specify the width and height of an image.</p>
                <p className="intro_example">&lt;img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;"/></p>
                <p>Alternatively, you can use the width and height attributes.</p>
                <p className="intro_example">&lt;img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"/></p>
            </div>
        );
    }
}