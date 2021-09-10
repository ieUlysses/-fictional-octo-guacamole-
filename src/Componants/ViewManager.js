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

        <><section className="bg">

            <IconButton />
            <h1>
                {classN}
            </h1>
            <div className="d-flex align-items-center justify-content-evenly mt-4">
                <h1 className="iTitle">Hi There!</h1>
                <img src={TheOne} className="" alt="" style={{ height: "25%", width: "25%" }} />
            </div>
            <div className=" container roundedMain Background d-flex flex-column mt-4" style={{ height: "55vh", width: "80vw" }}>
                <h1 className="sTitle">
                    Hej Da
                </h1>
                <p className="cText w-50">
                    Thank you for taking the time to check me out! I've just graduated a FullStack development Course with the fantastic DCI Berlin. Before me stands the Final presentation where I will along with my classmates unveil our Group Projects. The event is scheduled for the 02/08/21 tickets can be booked at the following link <a href="https://www.eventbrite.de/e/final-event-dci-one-event-multiple-talents-tickets-164469032303" target="_blank"><i class="fas fa-paperclip"></i></a>
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
                    <h1 className="sTitle" >
                        Job hunt
                    </h1>
                    <p className="cText">
                        Currenly I am seeking a new challenge in Fullstack or FrontEnd development. Adaptability, Resourcefullness and a Self-Starting nature are just a selection of the skills I would be pleased to bring to the table. You can find a copy of my Cv, Motivation and also a Zeugniss here  <a href="https://drive.google.com/file/d/1FXkm8g_NXmsrJ79L6bjmom5x3v_ArRqA/view?usp=sharing" target="_blank"><i class="fas fa-paperclip"></i></a>
                    </p>
                </div>
            </div>
        </section>

        </>
    )
}