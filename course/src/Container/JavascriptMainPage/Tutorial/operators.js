import React,{Component} from 'react';
import '../style.css';
 
export default class JSOperators extends Component {
    render() {
        return(
            <div>
                <h1>JavaScript Operators</h1>
                <p>The assignment operator (=) assigns a value to a variable.</p>
                <p>Example: <br/>
                var x = 10;
                </p>
                <p>The addition operator (+) adds numbers:</p>
                <p className="intro_example">Example: <br/>
                var x = 5;<br/>
                var y = 2;<br/>
                var z = x + y;
                </p>
                <p>The multiplication operator (*) multiplies numbers.</p>
                <p className="intro_example">Example: <br/>
                var x = 5;<br/>
                var y = 2;<br/>
                var z = x * y;
                </p>
                <h3>JavaScript Arithmetic Operators</h3>
                <p>Arithmetic operators are used to perform arithmetic on numbers:</p>
                <table border="1px">
                    <tr>
                        <th>Operator</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>+</td>
                        <td>Addition</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>Subtraction</td>
                    </tr>
                    <tr>
                        <td>*</td>
                        <td>Multiplication</td>
                    </tr>
                    <tr>
                        <td>/</td>
                        <td>Division</td>
                    </tr>
                    <tr>
                        <td>**</td>
                        <td>Exponentiation (ES2016)</td>
                    </tr>
                    <tr>
                        <td>%</td>
                        <td>Modulus (Division Remainder)</td>
                    </tr>
                    <tr>
                        <td>++</td>
                        <td>Increment</td>
                    </tr>
                    <tr>
                        <td>--</td>
                        <td>Decrement</td>
                    </tr>
                </table>
                <h3>JavaScript Comparison Operators</h3>
                <table border="1px">
                    <tr>
                        <th>Operator	</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>==</td>
                        <td>equal to</td>
                    </tr>
                    <tr>
                        <td>===</td>
                        <td>equal value and equal type</td>
                    </tr>
                    <tr>
                        <td>!=</td>
                        <td>not equal to</td>
                    </tr>
                    <tr>
                        <td>!==</td>
                        <td>not equal value or not equal type</td>
                    </tr>
                    <tr>
                        <td>></td>
                        <td>greater than</td>
                    </tr>
                    <tr>
                        <td>&lt;</td>
                        <td>lesser than</td>
                    </tr>
                    <tr>
                        <td>>=</td>
                        <td>greater than or equal to</td>
                    </tr>
                    <tr>
                        <td>&lt;=</td>
                        <td>lesser than or equal to</td>
                    </tr>
                    <tr>
                        <td>?:</td>
                        <td>ternary operator</td>
                    </tr>
                </table>
                <h3>JavaScript Logical Operators</h3>
                <table border="1px">
                    <tr>
                        <th>Operator</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>&&</td>
                        <td>logical and</td>
                    </tr>
                    <tr>
                        <td>||</td>
                        <td>logical or</td>
                    </tr>
                    <tr>
                        <td>!</td>
                        <td>logical not</td>
                    </tr>
                </table>
            </div>
        );
    }
}