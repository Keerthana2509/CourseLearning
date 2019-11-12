import React,{Component} from 'react';
import '../style.css';
 
export default class BootstrapImage extends Component {
    render() {
        return(
            <div>
                <h1>Bootstrap 4 Images</h1>
                <h3>Rounded Corners</h3>
                <p>The .rounded class adds rounded corners to an image</p>
                <p className="intro_example">Example: &lt;img src="cinqueterre.jpg" class="rounded" alt="Cinque Terre"/></p>
                <h3>Circle</h3>
                <p>The .rounded-circle class shapes the image to a circle</p>
                <p className="intro_example">Example: &lt;img src="cinqueterre.jpg" class="rounded-circle" alt="Cinque Terre"/></p>
                <h3>Thumbnail</h3>
                <p>The .img-thumbnail class shapes the image to a thumbnail (bordered)</p>
                <p className="intro_example">Example: &lt;img src="cinqueterre.jpg" class="img-thumbnail" alt="Cinque Terre"/></p>
                <h3>Aligning Images</h3>
                <p>Float an image to the right with the .float-right class or to the left with .float-left</p>
                <p className="intro_example">Example:<br/>
                &lt;img src="paris.jpg" class="float-left"/><br/>
                &lt;img src="paris.jpg" class="float-right"/>
                </p>
                <h3>Centered Image</h3>
                <p>Center an image by adding the utility classes .mx-auto (margin:auto) and .d-block (display:block) to the image</p>
                <p className="intro_example">Example: &lt;img src="paris.jpg" class="mx-auto d-block"/></p>
                <h3>Responsive Images</h3>
                <p>Images come in all sizes. So do screens. Responsive images automatically adjust to fit the size of the
                     screen. Create responsive images by adding an .img-fluid class to the &lt;img> tag. The image will then 
                     e nicely to the parent element. The .img-fluid class applies max-width: 100%; and height: auto; 
                     to the image</p>
                <p className="intro_example">Example: <br/>
                &lt;img class="img-fluid" src="img_chania.jpg" alt="Chania"/>
                </p>
            </div>
        );
    }
}
