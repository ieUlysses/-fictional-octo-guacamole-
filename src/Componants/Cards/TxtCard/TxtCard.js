import React, { useContext, useState } from "react";
import MyContext from "../../../Context/MyContext"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { Collapse, Grid, makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import { ExpandMoreOutlined, GitHub } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";


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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const useStyles = makeStyles((theme) => ({
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        }

    }));

    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);
    return (
        <>

            <Grid item>
                <Card className={`${colorBg} `}>


                    <CardContent>
                        <Typography className={`${colorIcon}`} color="textSecondary" gutterBottom>
                            {props.Title}
                        </Typography>


                        <Typography variant="body2" component="p" className={`${colorIcon}`}>
                            {props.Brief}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={props.Link}>
                            <IconButton size="small"><GitHub className={`${colorIcon}`} /></IconButton>
                        </a>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreOutlined className={`${colorIcon}`} />
                        </IconButton>

                    </CardActions>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent className={`${colorIcon}`}>

                            <Typography paragraph >
                                {props.Disc}
                            </Typography>

                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>

        </>
    )
}