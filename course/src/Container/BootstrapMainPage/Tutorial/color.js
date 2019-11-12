import React,{Component} from 'react';
import '../style.css';
 
export default class BootstrapColor extends Component {
    render() {
        return(
            <div>
                <h1>Bootstrap 4 Colors</h1>
                <h3>Text Colors</h3>
                <p>Bootstrap 4 has some contextual classes that can be used to provide "meaning through colors".
                    The classes for text colors are: .text-muted, .text-primary, .text-success, .text-info, .text-warning, 
                    .text-danger, .text-secondary, .text-white, .text-dark, .text-body (default body color/often black)
                    and .text-light:</p>
                <p>Contextual text classes can also be used on links, which will add a darker hover color</p>
                <p>You can also add 50% opacity for black or white text with the .text-black-50 or .text-white-50 classes.</p>
                <h3>Background Colors</h3>
                <p>The classes for background colors are: .bg-primary, .bg-success, .bg-info, .bg-warning, .bg-danger, 
                    .bg-secondary, .bg-dark and .bg-light. Note that background colors do not set the text color, so in 
                    some cases you'll want to use them together with a .text-* class.</p>
            </div>
        );
    }
}