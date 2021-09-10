import React, { useContext } from 'react';
import MyContext from '../../../Context/MyContext';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

export default function MediaCard(props) {


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
        <Grid item>
            <Card className={`${colorBg}`}>
                <CardActionArea>
                    <CardMedia
                        /* className={classes.media} */
                        image={props.Img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={`${colorIcon}`}>
                            {props.Title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={`${colorIcon}`}>
                            {props.Disc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={props.Link}>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </a>

                </CardActions>
            </Card>
        </Grid>
    );
}
