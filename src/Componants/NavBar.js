import IDev from "../Media/IDev.svg"
import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Container, Nav } from "react-bootstrap"
import "./Projects.css"
export default function () {

    return (
        <>
            <Navbar bg="dark" variant="dark" className="roundBtm ">
                <Container>
                    <div className=" d-flex align-items-center">
                        <Navbar.Brand href="#home">
                            <img
                                alt="Logo"
                                src={IDev}
                                width="80"
                                height="75"
                                className="d-inline-block align-center"
                            />{' '}
                            By James Conway
                        </Navbar.Brand>

                        <Nav className="d-flex  toEnd ">

                            <LinkContainer to="/">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/projects">
                                <Nav.Link href="#link">Projects</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <Nav.Link href="#about">about</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}