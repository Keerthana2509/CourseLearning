import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Base from '../../Component/Button';
let count = 0;
let check = [];
var fs = require('browserify-fs');

export default class Quiz extends Component {
    constructor() {
        super();
        this.result = this.result.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }
    evaluate(e) {
        let name = e.target.name;
        let flag =0;
        let value = e.target.value;
        this.props.questions.map((item) => {
        if(name === item.name && value === item.answer){
            check[item.name] = 1; 
            flag=1;
        }
        });
        if(flag === 0) {
            check[name] = 0;
        }
    }
    result() {
        this.props.questions.map((item) => {
                count = count+check[item.name]; 
        });
        alert("Total marks you scored out of "+this.props.totalquestions+" questions is: "+count);
        let checkitem = this.props.topic+"|"+this.props.totalquestions+"|"+count+"%"
        fs.appendFile('./text.txt', checkitem);
        count=0;
    }

    render() {
        return(
            <div>
                <h1 className="text-center">HTML QUIZ</h1>
                <ol className="block_style">
                    {this.props.questions.map((item) => 
                        <li>
                            <h3>{item.question}</h3>
                            <input type="radio" name={item.name} onChange={this.evaluate} value={item.option1} /><label>{item.option1}</label><br/>
                            <input type="radio" name={item.name} onChange={this.evaluate} value={item.option2}/><label>{item.option2}</label><br/>
                            <input type="radio" name={item.name} onChange={this.evaluate} value={item.option3}/><label>{item.option3}</label><br/>
                            <input type="radio" name={item.name} onChange={this.evaluate} value={item.option4}/><label>{item.option4}</label><br/>
                        </li>
                    )}
                </ol>
                <div className="text-center">
                <Base variant="success" text="Finish" click={this.result}/> 
                </div>
            </div>
        );
    }
}