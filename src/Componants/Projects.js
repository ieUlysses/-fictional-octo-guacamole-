import React from "react"
import { Grid } from "@material-ui/core"
import TxtCard from "./Cards/TxtCard/TxtCard"
import ProjectsProvider from "../Info/ProjectsProvider"

export default function () {

    return (
        <>
            {/* for background create a section, set 100% w+h then add classname={`${cName aboutBg}`} in css set .aboutBg & .aboutBg.active */}
            <Grid container fluid/* direction="row" */ justifyContent="center" alignItems="center" spacing="5">
                <ProjectsProvider />
            </Grid>
        </>
    )
}