import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/navbar.scss';
import React, { useState } from 'react';

function Navigation() {
    const [searchValue, setSearchValue] = useState('');

    function handleSearch() {
        if (searchValue.trim() !== '') {
            window.location.href = `/anime_list/${searchValue}`;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch();
    }



    return (<>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Strona główna</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex" style={{float: "right"}} onSubmit={handleSubmit}>
                        <Form.Control
                            onSubmit={handleSubmit}
                         type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                         value={searchValue}
                         onChange={(event) => setSearchValue(event.target.value)}
                        />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;