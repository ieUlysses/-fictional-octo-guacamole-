import React from "react"

import AboutProvider from "../../Info/AboutProvider"
import "../Projects/Projects.css"
import { Grid } from "@material-ui/core"




export default function (props) {
    console.log(props)
    return (
        <>
            <div className="w-100 d-flex justify-items-center ">

                <div className="w-75 rounded cME">
                    <Grid container /* direction="row" */ justifyContent="center" alignItems="center" spacing="5">
                        <AboutProvider />
                    </Grid>
                </div>
            </div>
        </>
    )
}