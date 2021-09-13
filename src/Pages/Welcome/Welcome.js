import React, { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import "../Projects/Projects.css"
import MyContext from '../../Context/MyContext';
import TheOne from "../../Media/TheOne.svg"
import IntroStatic from "../../Componants/Cards/StaticCard/IntroStatic";


export default function () {
    const context = useContext(MyContext);

    const { classN } = context;

    return (

        <>
            <IntroStatic />
        </>
    )
}