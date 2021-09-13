import React, { useContext, useState } from "react"
import axios from "axios";
import MyContext from "../../Context/MyContext";


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Message, SendTwoTone } from "@material-ui/icons";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        width: "80%"
    },
    button: {
        margin: theme.spacing(1),
    },
    inputText: {
        maxWidth: "150px"
    },
    input: {
        maxWidth: "90px"
    },


}));



export default function () {
    const context = useContext(MyContext);

    const { classN } = context;
    const classes = useStyles();

    let accentCol = ""
    let colorBg = ""
    let colorIcon = ""
    if (classN === "") {
        colorBg = "bg-light"
        colorIcon = "text-dark"
        accentCol = "primary"
    } else {
        colorBg = "bg-dark"
        colorIcon = "text-light"
        accentCol = "secondary"
    }

    const [message, SetMessage] = useState("")
    const [email, SetEmail] = useState("")
    const [subject, SetSubject] = useState("")
    /* const [sent, SetSent] = useState(false) */

    const handleSend = async () => {
        /* setSent(true) */
        try {
            await axios.post("https://fathomless-ocean-39740.herokuapp.com/send_mail", {
                message, subject, email
            }
            )
            console.log(message)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <Grid container justifyContent="center" alignItems="center" spacing="2"
            >

                <form className={`${classes.root} ${colorIcon}  ${colorBg}`}>
                    <Grid item >
                        <TextField

                            label="email"
                            type="text"

                            variant="standard"
                            className={classes.input}
                            color={accentCol}
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}

                        />


                        <TextField
                            id="standard-password-input"
                            label="subject"
                            type="text"
                            variant="standard"
                            color={accentCol}
                            className={classes.input}
                            value={subject}
                            onChange={(e) => SetSubject(e.target.value)}
                        />
                    </Grid>
                    <Grid item>

                        <TextField
                            label="message"
                            type="text"
                            maxRows={5}

                            variant="standard"
                            color={accentCol}
                            className={classes.inputText}

                            multiline="true "
                            value={message}
                            onChange={(e) => SetMessage(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color={accentCol}
                            className={`${classes.button} ${classes.inputText}`}
                            endIcon={<SendTwoTone>send</SendTwoTone>}
                            /* value={Sent} */
                            /* onChange={(e) => SetSent(e.target.value)} */
                            onClick={handleSend}
                        >
                            Send
                        </Button>




                    </Grid>




                </form>

            </Grid >

        </>
    )
}
