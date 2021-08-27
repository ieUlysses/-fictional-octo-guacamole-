import React from "react"

import { Card, Button } from "react-bootstrap"

import "./Projects.css"

export default function (props) {

    return (
        <>

            <Card style={{ width: '45%', height: "80%" }} className=" d-flex rounded bg-dark">

                <Card.Body className="cardCol Shadow">
                    <Card.Title className="cTitle">{props.Title}</Card.Title>
                    <Card.Text className="cText">
                        {props.Disc}
                    </Card.Text>
                    <Button variant="primary">Check it out<a href={props.Link}></a></Button>
                </Card.Body>


            </Card>

        </>
    )
}