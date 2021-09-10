import React, { useState } from "react";
import MyContext from "./MyContext"

const MyProvider = (props) => {
    const [classN, setClassN] = useState("")

    return (
        <MyContext.Provider
            value={{ classN, setClassN }}
        >{props.children}
        </MyContext.Provider>
    )
}

export default MyProvider