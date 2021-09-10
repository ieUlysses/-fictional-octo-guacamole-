import React from "react"

import TxtCard from "../Componants/Cards/TxtCard/TxtCard"


export default function () {

    const Project = [
        {
            Title: "FizzBuzz",
            Link: "https://github.com/ieUlysses/FizzBuzz",
            Disc: "The classic, react Style",
            Brief: "React"
        }, {
            Title: "PokeDex",
            Link: "",
            Disc: "A cheap reproduction of the famous PokeDex, version 2.0is on its way....maybe",
            Brief:
                `Api, Axios, Hooks`
        },
        {
            Title: "Countries",
            Link: `https://github.com/ieUlysses/Rest-Countries-revisited`,
            Disc: "An easzy breazy project demonstrating useEffect & useState Styling is still in the works but final version will use material UI purely",
            Brief: "Api, Axios, Hooks"
        }
        ,
        {
            Title: "This Portfolio",
            Link: "https://github.com/ieUlysses/-fictional-octo-guacamole-",
            Disc: "So, you want to see what makes this portfolio tick? ok, cute. There's a fair amount going on behind the scenes. future versions will hopefully use mainly pure material Ui",
            Brief: "Material ui, ContextApi"
        }
    ]

    return (
        <>
            {
                Project.map((props) => <TxtCard
                    Title={props.Title}
                    Disc={props.Disc}
                    Link={props.Link}
                    Brief={props.Brief}
                />)
            }
        </>
    )
}