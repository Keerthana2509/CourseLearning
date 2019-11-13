import React,{Component} from 'react';
import '../style.css';
 
export default class JSSyntax extends Component {
    render() {
        return(
            <div>
                <h1>JavaScript Syntax</h1>
                <p>JavaScript syntax is the set of rules, how JavaScript programs are constructed</p>
                <p className="intro_example">Example: <br/>
                var x, y, z;       // How to declare variables<br/>
                x = 5; y = 6;      // How to assign values<br/>
                z = x + y;         // How to compute values
                </p>
                <h3>JavaScript Values</h3>
                <p>The JavaScript syntax defines two types of values: Fixed values and variable values.
                    Fixed values are called literals. Variable values are called variables.</p>
                <h3>JavaScript Literals</h3>
                <p>The most important rules for writing fixed values are:</p>
                <ul>
                    <li>
                        <p>Numbers are written with or without decimals:</p>
                        <p className="intro_example">Example: <br/>
                        10.50<br/>
                        1001
                        </p>
                    </li>
                    <li>
                        <p>Strings are text, written within double or single quotes:</p>
                        <p className="intro_example">Example: <br/>
                        "John Doe"<br/>
                        'John Doe'
                        </p>
                    </li>
                </ul>
                <h3>JavaScript Variables</h3>
                <p>In a programming language, variables are used to store data values. JavaScript uses the 'var' keyword 
                    to declare variables. An equal sign is used to assign values to variables. In this example, x is 
                    defined as a variable. Then, x is assigned (given) the value 6:</p>
                <p className="intro_example">Example: <br/>
                var x;<br/>
                x = 6;
                </p>
                <h3>JavaScript Operators</h3>
                <p>JavaScript uses arithmetic operators ( + - * / ) to compute values.</p>
                <p className="intro_example">Example: <br/>
                (5 + 6) * 10
                </p>
                <h3>JavaScript Expressions</h3>
                <p>An expression is a combination of values, variables, and operators, which computes to a value.
                    The computation is called an evaluation.:</p>
                <p className="intro_example">Example: <br/>
                5 * 10
                </p>
                <h3>JavaScript Keywords</h3>
                <p>JavaScript keywords are used to identify actions to be performed. The 'var' keyword tells the browser 
                    to create variables</p>
                <p className="intro_example">Example: <br/>
                var x, y;<br/>
                x = 5 + 6;<br/>
                y = x * 10;
                </p>
                <h3>JavaScript is Case Sensitive</h3>
                <p>All JavaScript identifiers are case sensitive. The variables lastName and lastname, are two different variables.</p>
            </div>
        );
    }
}