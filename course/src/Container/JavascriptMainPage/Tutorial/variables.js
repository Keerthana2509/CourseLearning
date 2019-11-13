import React,{Component} from 'react';
import '../style.css';
 
export default class JSVariables extends Component {
    render() {
        return(
            <div>
                <h1>JavaScript Variables</h1>
                <p>JavaScript variables are containers for storing data values. In this example, x, y, and z, are variables:</p>
                <p className="intro_example">Example: <br/>
                var x = 5;<br/>
                var y = 6;<br/>
                var z = x + y;
                </p>
                <p>From the example above, you can expect:</p>
                <ul>
                    <li>x stores the value 5</li>
                    <li>y stores the value 6</li>
                    <li>z stores the value 11</li>
                </ul>
                <h3>JavaScript Identifiers</h3>
                <p>All JavaScript variables must be identified with unique names. These unique names are called identifiers.
                    Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume). The 
                    general rules for constructing names for variables (unique identifiers) are:</p>
                <ul>
                    <li>Names can contain letters, digits, underscores, and dollar signs.</li>
                    <li>Names must begin with a letter</li>
                    <li>Names can also begin with $ and _ (but we will not use it in this tutorial)</li>
                    <li>Names are case sensitive (y and Y are different variables)</li>
                    <li>Reserved words (like JavaScript keywords) cannot be used as names.</li>
                </ul>
                <h3>Declaring (Creating) JavaScript Variables</h3>
                <p>Creating a variable in JavaScript is called "declaring" a variable. You declare a JavaScript variable
                     with the 'var' keyword.</p>
                <p className="intro_example">Example: <br/>
                var carName;
                </p>
                <h3>One Statement, Many Variables</h3>
                <p>You can declare many variables in one statement. Start the statement with var and separate the variables by comma:</p>
                <p className="intro_example">Example: <br/>
                var person = "John Doe", carName = "Volvo", price = 200;
                </p>
                <h3>Value = undefined</h3>
                <p>In computer programs, variables are often declared without a value. The value can be something that has to be
                     calculated, or something that will be provided later, like user input.</p>
                <p>A variable declared without a value will have the value undefined.</p>
                <h3>Re-Declaring JavaScript Variables</h3>
                <p>If you re-declare a JavaScript variable, it will not lose its value. If you re-declare a JavaScript variable,
                     it will not lose its value.</p>
                <p className="intro_example">Example: <br/>
                var carName = "Volvo";<br/>
                var carName;
                </p>
                
            </div>
        );
    }
}