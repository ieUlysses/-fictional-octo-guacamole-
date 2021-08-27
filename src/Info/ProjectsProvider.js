import React from "react"
import Cards from "../Componants/Cards"
import CardsvTwo from "../Componants/CardsvTwo"

export default function () {

    const Project = [
        {
            Title: "FizzBuzz",
            Link: "https://www.telerik.com/kendo-react-ui/components/dateinputs/",
            Disc: "The classic, react Style",
        }, {
            Title: "PokeDex",
            Link: "",
            Disc: "Pick your Pokemon",
        },
        {
            Title: "Countries",
            Link: "",
            Disc: "An easzy breazy project demonstrating useEffect & useState",
        }
    ]

    return (
        <>
            {
                Project.map((props) => <CardsvTwo
                    Title={props.Title}
                    Disc={props.Disc}
                    Link={props.Link}
                />)
            }
        </>
    )
}