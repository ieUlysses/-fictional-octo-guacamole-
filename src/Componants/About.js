

import React from "react"

import AboutProvider from "../Info/AboutProvider"

import Gaisce from "../Media/Gaisce.svg"
import Habitat from "../Media/Habitat.svg"

import { Grid } from "@material-ui/core"

import MeOne from "../Media/MeOne.svg"

import "./Projects.css"

export default function (props) {
    console.log(props)
    return (
        <>
            <Grid container fluid/* direction="row" */ justifyContent="center" alignItems="center" spacing="5">
                <AboutProvider />
            </Grid>
        </>
    )
}