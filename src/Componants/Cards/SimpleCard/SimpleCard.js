import React, { useContext } from "react"
import MyContext from "../../../Context/MyContext"

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function (props) {
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

    const classes = useStyles();
    return (
        <>
            <Grid item>

                <Card className={` ${colorBg}`}>
                    <CardContent>
                        <Typography className={`${classes.title} ${colorIcon}`} color="textSecondary" gutterBottom>
                            {props.Title}
                        </Typography>

                        <Typography variant="body2" component="p" className={`${colorIcon}`}>
                            {props.Disc}
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </>
    )
}