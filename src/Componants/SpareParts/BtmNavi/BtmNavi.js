import React, { useContext } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';


import "./BtmNavi.css"

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Switch from "../../Switch/SwitchWork"
import ThemeButton from '../../ThemeButton/ThemeButton';
import MyContext from "../../../Context/MyContext"


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
        <BottomNavigation className={`${colorBg} ${colorIcon}`}
            showLabels

        >
            {/* Normal Material ui format  */}
            <BottomNavigationAction label="Home" icon={<HomeIcon isRound="true" />} component={Link} to="/" className={` ${colorIcon}`} />

            <BottomNavigationAction label="About" icon={<EmojiPeopleIcon />} component={Link} to="/about" className={` ${colorIcon}`} />

            <BottomNavigationAction label="Projects" icon={<GitHubIcon />} component={Link} to="/projects" className={` ${colorIcon}`} />

            <BottomNavigationAction label="Contact" icon={<ContactPhoneIcon />} component={Link} to="/contact" className={` ${colorIcon}`} />

            {/*  <BottomNavigationAction label="hi" component={ThemeButton} className={` ${colorIcon}`} /> */}

            {/* <BottomNavigationAction Label="Switch" component={Switch} className={`${colorIcon}`} /> */}






        </BottomNavigation>
    );
}
