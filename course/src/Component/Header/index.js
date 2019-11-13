import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import './style.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="TextColor header_fixed bg-primary">
                <Navbar expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand><Image className="image" src="https://www.slingshot.co.uk/wp-content/uploads/Learning-Studio-Logo-952x595.jpg"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Form inline>
                    <InputGroup>
                        <InputGroup>
                            <FormControl className="input" placeholder="Search.."/>
                            <InputGroup.Append>
                                <Button variant="success">Button</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </InputGroup>
                    </Form>
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">HOME</Link>
                            <Link to="/htmlpage" className="nav-link">HTML</Link>
                            <Link to="/csspage" className="nav-link">CSS</Link>
                            <Link to="/bootstrappage" className="nav-link">BootStrap</Link>
                            <Link to="/javascriptpage" className="nav-link">JavaScript</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button variant="success">Report</Button>
                </Navbar>
            </div>  
        );
    }
}
export default Header;