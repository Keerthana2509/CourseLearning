import React,{Component} from 'react';
import '../style.css';
 
export default class CSSBorder extends Component {
    render() {
        return(
            <div>
                <h1>CSS Borders</h1>
                <p>The CSS 'border' properties allow you to specify the style, width, and color of an element's border.</p>
                <h3>CSS Border Style:</h3>
                <p>The 'border-style' property specifies what kind of border to display. The following values are allowed:</p>
                <ul>
                    <li>dotted - Defines a dotted border</li>
                    <li>dashed - Defines a dashed border</li>
                    <li>solid - Defines a solid border</li>
                    <li>double - Defines a double border</li>
                    <li>groove - Defines a 3D grooved border. The effect depends on the border-color value</li>
                    <li>ridge - Defines a 3D ridged border. The effect depends on the border-color value</li>
                    <li>inset - Defines a 3D inset border. The effect depends on the border-color value</li>
                    <li>outset - Defines a 3D outset border. The effect depends on the border-color value</li>
                    <li>none - Defines no border</li>
                    <li>hidden - Defines a hidden border</li>
                </ul>
                <p>The border-style property can have from one to four values (for the top border, right border, bottom border,
                     and the left border).</p>
                <p className="intro_example">Example: p.dotted {'{'}border-style: dotted;}</p>
                <h3>CSS Border Width:</h3>
                <p>The 'border-width' property specifies the width of the four borders. The width can be set as a specific size
                     (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick. The 
                     'border-width' property can have from one to four values (for the top border, right border, bottom border, 
                     and the left border).</p>
                <h3>CSS Border Color:</h3>
                <p>The 'border-color' property is used to set the color of the four borders. The color can be set by:</p>
                <ul>
                    <li>name - specify a color name, like "red"</li>
                    <li>Hex - specify a hex value, like "#ff0000"</li>
                    <li>RGB - specify a RGB value, like "rgb(255,0,0)"</li>
                    <li>transparent</li>
                </ul>
                <p>The 'border-color' property can have from one to four values (for the top border, right border, bottom border,
                     and the left border). If 'border-color' is not set, it inherits the color of the element.</p>
                <p className="intro_example">Example: p.one {'{'}
                border-style: solid;
                border-color: red;
                }
                </p>
                <h3>CSS Border - Individual Sides</h3>
                <p>From the examples above you have seen that it is possible to specify a different border for each side.
                    In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left)</p>
                <p className="intro_example">Example: p {'{'}
                    border-top-style: dotted;
                    border-right-style: solid;
                    border-bottom-style: dotted;
                    border-left-style: solid;
                    }
                </p>
                <h3>CSS Border - Shorthand Property</h3>
                <p>As you can see from the examples above, there are many properties to consider when dealing with borders.
                    To shorten the code, it is also possible to specify all the individual border properties in one property.
                    The 'border' property is a shorthand property for the following individual border properties:</p>
                <ul>
                    <li>border-width</li>
                    <li>border-style (required)</li>
                    <li>border-color</li>
                </ul>
                <p className="intro_example">Example: p {'{'}
                    border: 5px solid red;
                    }
                </p>
            </div>
        );
    }
}