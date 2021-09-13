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
                            Email: ire.ulysses@gmail.com
                        </Typography>
                        <Typography className={`${classes.title} ${colorIcon}`} color="textSecondary" gutterBottom>
                            City: Berlin
                        </Typography>
                        <Typography className={`${classes.title} ${colorIcon}`} color="textSecondary" gutterBottom>
                            Phone: 00 49 176 55263081
                        </Typography>
                        <Typography className={`${classes.title} ${colorIcon}`} color="textSecondary" gutterBottom>
                            GitHub: ieUlysses
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}