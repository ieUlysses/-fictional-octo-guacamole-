import IDev from "../Media/IDev.svg"
import React, { useContext } from "react"

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import "./Projects.css"


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';




import { Link } from 'react-router-dom';

import Switch from "../Componants/Switch/SwitchWork"
import ThemeButton from '../Componants/ThemeButton/ThemeButton';
import MyContext from "../Context/MyContext"
import SwitchR from "../Componants/Switch/SwitchWork";


export default function () {

    const context = useContext(MyContext);

    const { classN } = context;

    let colorBg = ""
    let colorIcon = ""
    let navTog = ""
    if (classN === "") {
        colorBg = "bg-light"
        colorIcon = "text-dark"


    } else {
        colorBg = "bg-dark"
        colorIcon = "text-light"
        navTog = "bg-light"

    }


    return (
        <>
            {/* <Navbar bg="dark" variant="dark" className="roundBtm ">
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
                                <Nav.Link href="#about">About</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </div>
                </Container>
            </Navbar> */}


            <Navbar className={`${colorBg}`} expand="none">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Logo"
                            src={IDev}
                            width="80"
                            height="75"
                            className="d-inline-block align-center"
                        />{' '}
                        <span className={colorIcon}>By James Conway</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className={navTog} />

                    <Navbar.Collapse id="basic-navbar-nav" >

                        <Nav className="me-auto">
                            <BottomNavigation className={`${colorBg} `} showLabels color="primary">

                                <BottomNavigationAction label="Home" icon={<HomeIcon isRound="true" />} text="hello?" component={Link} to="/" className={` ${colorIcon}`} />
                                hi
                                <BottomNavigationAction label="About" icon={<EmojiPeopleIcon />} component={Link} to="/about" className={` ${colorIcon}`} />

                                <BottomNavigationAction label="Projects" icon={<GitHubIcon />} component={Link} to="/projects" className={` ${colorIcon}`} />

                                <BottomNavigationAction label="Contact" icon={<ContactPhoneIcon />} component={Link} to="/contact" className={` ${colorIcon}`} />

                                <BottomNavigationAction label="Switch" component={ThemeButton} />
                            </BottomNavigation>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}


