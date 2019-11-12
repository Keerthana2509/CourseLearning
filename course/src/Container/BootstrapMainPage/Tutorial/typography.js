import React,{Component} from 'react';
import '../style.css';
 
export default class BootstrapTypography extends Component {
    render() {
        return(
            <div>
                <h1>Bootstrap 4 Text/Typography</h1>
                <p>Bootstrap 4 uses a default 'font-size' of 16px, and its 'line-height' is 1.5.
                The default 'font-family' is "Helvetica Neue", Helvetica, Arial, sans-serif.
                In addition, all &lt;p> elements have 'margin-top: 0' and 'margin-bottom: 1rem' (16px by default).</p>
                <h3>&lt;h1> - &lt;h6></h3>
                <p>Bootstrap 4 styles HTML headings with a bolder font-weight and an increased font-size</p>
                <h3>Display Headings</h3>
                <p>Display headings are used to stand out more than normal headings (larger font-size and lighter 
                    font-weight), and there are four classes to choose from: .display-1, .display-2, .display-3, .display-4</p>
                <h3>&lt;small></h3>
                <p>In Bootstrap 4 the HTML &lt;small> element is used to create a lighter, secondary text in any heading</p>
                <h3>&lt;mark></h3>
                <p>Bootstrap 4 will style the HTML &lt;mark> element with a yellow background color and some padding:</p>
                <h3>&lt;abbr></h3>
                <p>Bootstrap 4 will style the HTML &lt;abbr> element with a dotted border bottom</p>
                <h3>&lt;blockquote></h3>
                <p>Add the .blockquote class to a &lt;blockquote> when quoting blocks of content from another source</p>
                <h3>&lt;dl></h3>
                <p>Bootstrap 4 will style the HTML &lt;dl> element in the following way</p>
                <h3>&lt;kbd></h3>
                <p>Bootstrap 4 will style the HTML &lt;kbd> element in the following way</p>
            </div>
        );
    }
}