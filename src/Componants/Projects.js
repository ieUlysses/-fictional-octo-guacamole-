import React from "react"
import { Grid } from "@material-ui/core"
import TxtCard from "./Cards/TxtCard/TxtCard"
import ProjectsProvider from "../Info/ProjectsProvider"
import "./Projects.css"

export default function () {

    return (
        <>
            {/* for background create a section, set 100% w+h then add classname={`${cName aboutBg}`} in css set .aboutBg & .aboutBg.active */}

            <div className="w-100 h-100 d-flex justify-items-center ">

                <div className="w-75 h-75 bg-warning rounded cME">
                    <Grid container /* direction="row" */ justifyContent="center" alignItems="center" spacing="5">
                        <ProjectsProvider />
                    </Grid>
                </div>
            </div>
        </>
    )
}