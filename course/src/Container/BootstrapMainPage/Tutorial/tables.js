import React,{Component} from 'react';
import '../style.css';
 
export default class BootstrapTable extends Component {
    render() {
        return(
            <div>
                <h1>Bootstrap 4 Tables</h1>
                <p>A basic Bootstrap 4 table has a light padding and horizontal dividers. The .table class adds basic 
                    styling to a table.</p>
                <h3>Striped Rows</h3>
                <p>The .table-striped class adds zebra-stripes to a table</p>
                <h3>Bordered Table</h3>
                <p>The .table-bordered class adds borders on all sides of the table and cells</p>
                <h3>Hover Rows</h3>
                <p>The .table-hover class adds a hover effect (grey background color) on table rows</p>
                <h3>Black/Dark Table</h3>
                <p>The .table-dark class adds a black background to the table</p>
                <h3>Dark Striped Table</h3>
                <p>Combine .table-dark and .table-striped to create a dark, striped table</p>
                <h3>Hoverable Dark Table</h3>
                <p>The .table-hover class adds a hover effect (grey background color) on table rows</p>
                <h3>Borderless Table</h3>
                <p>The .table-borderless class removes borders from the table</p>
                <h3>Table Head Colors</h3>
                <p>The .thead-dark class adds a black background to table headers, and the .thead-light
                     class adds a grey background to table headers</p>
                <h3>Small table</h3>
                <p>The .table-sm class makes the table smaller by cutting cell padding in half</p>
            </div>
        );
    }
}