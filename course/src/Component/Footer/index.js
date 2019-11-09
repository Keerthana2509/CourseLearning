import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../List';
import './style.css';

export default class Footer extends Component {
    render() {
        let tutorials = ["HTML Tutorial","CSS Tutorial","Bootstrap Tutorials","JavaScript Tutorial"];
        let references = ["HTML Reference","CSS Reference","Bootstrap Reference","JavaScript Reference"];
        let quizes = ["HTML Quiz","CSS Quiz","Bootstrap Quiz","JavaScript Quiz"];
        let examples = ["HTML Example","CSS Example","Bootstrap Example","JavaScript Example"];
        return(
            <div className="row TextColor bg-primary">
                <div className="col text-center">
                    <h2>Top Tutorials</h2>
                    <List listItems={tutorials}/>
                </div>
                <div className="col">
                    <h2>Top References</h2>
                    <List listItems={references}/>
                </div>
                <div className="col">
                    <h2>Top Examples</h2>
                    <List listItems={quizes}/>
                </div>
                <div className="col">
                    <h2>Top Quiz</h2>
                    <List listItems={examples}/>
                </div>
            </div>
        );
    }
}