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


import ThemeButton from '../Componants/ThemeButton/ThemeButton';
import MyContext from "../Context/MyContext"


export default function () {

    const context = useContext(MyContext);

    const { classN } = context;

    let colorBg = ""
    let colorIcon = ""
    if (classN === "") {
        colorBg = "bg-light"
        colorIcon = "text-dark"
    } else {
        colorBg = "bg-dark"
        colorIcon = "text-light"
    }


    return (
        <>



            <Navbar className={`${colorBg}`} expand="lg">
                <Container>
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

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                            <BottomNavigationAction label="Home" icon={<HomeIcon isRound="true" />} component={Link} to="/" className={` ${colorIcon}`} />
                            hi
                            <BottomNavigationAction label="About" icon={<EmojiPeopleIcon />} component={Link} to="/about" className={` ${colorIcon}`} />

                            <BottomNavigationAction label="Projects" icon={<GitHubIcon />} component={Link} to="/projects" className={` ${colorIcon}`} />

                            <BottomNavigationAction label="Contact" icon={<ContactPhoneIcon />} component={Link} to="/contact" className={` ${colorIcon}`} />

                            <NavDropdown /* varient={nCol} */ title="Settings" id="basic-nav-dropdown" >
                                <NavDropdown.Item > <ThemeButton /> </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}


