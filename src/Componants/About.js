

import React from "react"

import AboutProvider from "../Info/AboutProvider"

import Gaisce from "../Media/Gaisce.svg"
import Habitat from "../Media/Habitat.svg"

import MeOne from "../Media/MeOne.svg"

import "./Projects.css"

export default function (props) {
    console.log(props)
    return (
        <>





            <div className="container align-items-center bg-dark rounded-pill w-50 h-50 d-flex mt-3">
                <img className="w-100 h-75 rounded-pill  imgTrans" src={MeOne}>
                </img>
                <h4 className="h-25 text-light text-center">
                    I've been on this Planet for near on 23 Years. and I've worked in some capacity for the past 10 from School Photographer to FullStack Graduate.
                </h4>
            </div>

            <div>
                <h4 className="iTitle ">Vocational Work</h4>
            </div>

            <div className="container  roundedMain mt-5 Background">

                <div className="container h-25 w-75 d-flex justify-content-evenly">
                    <img src={Gaisce} className="w-25 ">
                    </img>
                    <img src={Habitat} className="w-25 ">
                    </img>
                </div>
                <div className="container d-flex justify-content-around   " style={{ height: "45vh", width: "80vw" }}>
                    <AboutProvider />
                </div>

            </div>


        </>
    )
}