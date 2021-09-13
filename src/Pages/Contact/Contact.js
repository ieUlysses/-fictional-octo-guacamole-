import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import EmailClient from "../../Componants/EmailClient/EmailClient";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";


import "./Contact.css"
import ContactCard from "../../Componants/Cards/ContactCard/ContactCard";
import StaticCard from "../../Componants/Cards/StaticCard/StaticCard";

export default function () {


    return (
        <>
            <div className="holder">
                <div className="CenterME">
                    <Grid container justifyContent="center" alignItems="center" spacing="5">
                        <StaticCard />
                        <ContactCard />
                        <EmailClient />


                    </Grid>
                </div>
            </div>
        </>
    )
}