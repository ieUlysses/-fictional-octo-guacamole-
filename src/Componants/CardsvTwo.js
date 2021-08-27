
import React from "react"
import MeOne from "../Media/MeOne.svg"
export default function (props) {
    return (
        <div className=' w-50 h-75 rounded  d-flex flex-column justify-content-evenly bg-dark text-light post'>
            {/* <img className='align-self-center  w-50 h-75  rounded imgTransform' src={MeOne} alt='' /> */}

            <div className="d-flex flex-column text-center  w-75 align-self-center">
                <h3 className='postTitle '>{props.Title}</h3>

                <div className="d-flex justify-content-evenly">

                </div>
                <h6 className='hostDesc cardText'>{props.Disc}</h6>



            </div>
            <a className="align-self-center" href={props.Link}><i class="fab fa-github-square"></i></a>
        </div>
    )
}