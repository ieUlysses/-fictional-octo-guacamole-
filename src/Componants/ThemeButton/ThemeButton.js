import React, { useContext, useState } from "react"
import MyContext from "../../Context/MyContext"

import { IconButton } from "@material-ui/core"
import { NightsStayRounded, WbSunnyRounded } from "@material-ui/icons"
import { Tooltip } from "@material-ui/core"
/* import { blue, yellow } from "@material-ui/core/colors"; */

export default function () {
    const context = useContext(MyContext);

    const { classN, setClassN } = context;

    const toggleContext = () => {
        setClassN(classN === "" ? "active" : "")
    }


    let icon = ""
    let current = ""
    let colorIcon = ""



    if (classN === "") {
        current = "light mode"
        icon = <WbSunnyRounded />

        colorIcon = "text-dark"
    } else {
        icon = <NightsStayRounded />
        colorIcon = "text-light"

    }
    return (
        <>
            <Tooltip title="Toggle Display mode" arrow>
                <IconButton onClick={toggleContext} className={`${colorIcon}`}>
                    {icon}
                </IconButton>
            </Tooltip>
        </>
    )
}