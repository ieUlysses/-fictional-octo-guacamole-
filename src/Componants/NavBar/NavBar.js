import React, { useContext } from "react"

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

import IDev from "../../Media/IDev.svg"
import IDevLight from "../../Media/IDevLight.svg"

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import { Link } from 'react-router-dom';

import ThemeButton from '../ThemeButton/ThemeButton';
import MyContext from "../../Context/MyContext"



export default function () {

    const context = useContext(MyContext);

    const { classN } = context;

    let colorBg = ""
    let colorIcon = ""
    let navTog = ""
    let logoCol = ""
    if (classN === "") {
        colorBg = "bg-light"
        colorIcon = "text-dark"
        logoCol = IDevLight


    } else {
        colorBg = "bg-dark"
        colorIcon = "text-light"
        navTog = "bg-light"
        logoCol = IDev

    }


    return (
        <>
            <Navbar className={`${colorBg}`} expand="none">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Logo"
                            src={logoCol}
                            width="80"
                            height="75"
                            className="d-inline-block align-center"
                        />
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


