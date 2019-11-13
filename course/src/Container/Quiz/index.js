import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Base from '../../Component/Button';
let count = 0;

export default class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.result = this.result.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }
    evaluate(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.props.questions.map((item) => {
        if(name === item.name && value === item.answer){
             count =count+1;
        }
    })
    }
    result() {
        alert("Total marks you scored out of "+this.props.totalquestions+" questions is: "+count);
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