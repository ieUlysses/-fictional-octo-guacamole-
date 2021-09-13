import React, { useContext } from "react"
import MyContext from "../../../Context/MyContext";

import TheOne from "../../../Media/TheOne.svg"

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core";



export default function (props) {
    const useStyles = makeStyles({
        root: {
            maxWidth: "352px",
            marginTop: "12vh",
            borderRadius: "5px",
            margin: " auto"

        },
        media: {
            height: "18rem",
            margin: "auto"
        },
    });

    const classes = useStyles();
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
            <Card className={`${classes.root}  ${colorBg}`}>



                <img src={TheOne} className={classes.media} />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={`${colorIcon}`}>
                        Failte
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={`${colorIcon}`}>
                        Welcome to my portfolio. As I grow as a developer, my portfolio will grow with me. If you have any feedback please navigate to my conact section and drop me an email using the built in email client.
                    </Typography>
                </CardContent>


            </Card>
        </>

    )
}