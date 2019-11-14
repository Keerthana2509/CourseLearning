import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Base from '../../Component/Button';
import Header from '../../Component/Header';
import './style.css';
var fs = require('browserify-fs');

function read(callback) {
    let values = [];
    let arr =[];
    let path = require("path");
    fs.readFile(
      path.resolve(__dirname, './text.txt'),
      'utf-8',
      (err, data) => {
        if (err) throw err;
        values = data.toString().split('%');
  
        const listItems = values.map((val) => {
        arr = val.split('|');
        return (
            <tr>
                <td>{arr[0]}</td>
                <td>{arr[1]}</td>
                <td>{arr[2]}</td>
            </tr>
            )
        });
        return callback(listItems);
      }
    );
  }

export default class Report extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
      }
      componentDidMount() {
        read((result) => {
          this.setState({
            result,
          });
        });
      }
    
      render() {
        return (
          <div>
              <Header/>
              <div className="container position text-center">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Topic</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.result}
                    </tbody>
                </Table>
                <Link to="/"><Base variant="success" text="Back To Home Page"/></Link>
             </div>
          </div>
        );
      }

} 