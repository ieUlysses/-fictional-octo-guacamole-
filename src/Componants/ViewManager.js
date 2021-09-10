import React, { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import "./Projects.css"
import MyContext from '../Context/MyContext';
import TheOne from "../Media/TheOne.svg"
import { IconButton } from "@material-ui/core";


export default function () {
    const context = useContext(MyContext);

    const { classN } = context;

    return (

        <>
            <section className="bg">

                <div className="d-flex align-items-center justify-content-evenly mt-4">
                    <h1 className="iTitle">Hi There!</h1>
                </div>
                <div className=" container roundedMain Background d-flex flex-column mt-4" style={{ height: "55vh", width: "80vw" }}>
                    <h1 className="sTitle">
                        Hej Da
                    </h1>
                    <p className="cText w-50">

                    </p>
                    <ListGroup horizontal className="w-75 align-self-center ">
                        <ListGroup.Item className="bg-dark lStyle"><i class="fas fa-phone-alt"></i></ListGroup.Item>
                        <ListGroup.Item
                            className="bg-dark lStyle">00 49 176 55263081</ListGroup.Item>
                        <ListGroup.Item
                            className="bg-dark lStyle"><i class="fas fa-envelope-open-text"></i></ListGroup.Item>
                        <ListGroup.Item className="bg-dark lStyle">ire.ulysses@gmail.com</ListGroup.Item>
                        <ListGroup.Item className="bg-dark lStyle"><i class="fas fa-home"></i></ListGroup.Item>
                        <ListGroup.Item className="bg-dark lStyle">Berlin</ListGroup.Item>
                    </ListGroup>
                    <div>


                    </div>
                </div>
            </section>

        </>
    )
}