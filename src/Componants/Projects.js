import React from "react"
import AboutProvider from "../Info/AboutProvider"
import ProjectsProvider from "../Info/ProjectsProvider"
import TechStack from "../Media/TechStack.svg"
export default function () {

    return (
        <>


            <div className="container roundedMain mt-5 Background d-flex flex-column text-center " style={{ height: "75vh", width: "80vw" }}>
                <h1 className="sTitle">Please, feel free to check out my featured Projects
                </h1>

                <img src={TechStack} alt="TechStack" className="h-50" />

                <div className="container d-flex justify-content-evenly h-50  align-items-center rounded"  >

                    <ProjectsProvider />

                </div>
            </div>


        </>

    )
}