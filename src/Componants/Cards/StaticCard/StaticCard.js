import React, { useContext } from "react"
import MyContext from "../../../Context/MyContext"

import { Card, CardContent, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 140,
    },
});



export default function () {

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
            <Grid item>
                <Card className={`${classes.root} ${colorBg}`} >
                    <CardContent>
                        <Typography className={`${classes.title} ${colorIcon}`} color="textSecondary" gutterBottom>
                            Thank you for checking out my humble portfolio, I hope you enjoyed it. New elements and features will be added as I encounter new technologies and practices. Keep an eye on my Projects tab, rumour has it that Typescript is about to make an apperance.
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}