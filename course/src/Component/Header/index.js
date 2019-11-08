import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
//import Image from 'react-bootstrap/Image';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="TextColor">
                <Navbar expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand>Learning Studio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
            
                    <Form inline>
                    <InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl className="input"
                            placeholder="Search.."
                            />
                            <InputGroup.Append>
                            <Button variant="success">Button</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </InputGroup>
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link href="#h" className="link">HTML</Nav.Link>
                        <Nav.Link href="#c" className="link">CSS</Nav.Link>
                        <Nav.Link href="#b" className="link">Bootstrap</Nav.Link>
                        <Nav.Link href="#j" className="link">JavaScript</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Button variant="success">Report</Button>
                </Navbar>
            </div>
           // <Navbar.Brand><Image className="image" src="https://www.slingshot.co.uk/wp-content/uploads/Learning-Studio-Logo-952x595.jpg"/></Navbar.Brand>
        );
    }
}
export default Header;