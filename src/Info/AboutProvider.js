import React from "react"
import Cards from "../Componants/Cards"

export default function () {

    const About = [
        {
            Title: "Gaisce, The presidents award",
            Link: "https://www.gaisce.ie/",
            Disc: " Charity and Community work has always been close to my Heart from a young age. I earned my Gaisce Bronze award which saw me undertake a 2 day cycle with some fellow students, and also 13 weeks Community Involvement where I worked in a charity shop. After this experience I helped the following Gaisce Students assisting with fundraising and acting as a guide on the adventure journy",
        }, {
            Title: "Habitat For Humanity",
            Link: "https://oldbawncs.ie/news/habitat-for-humanity-fundraisers-darts-and-comedy",
            Disc: "Not long after this I worked with a team of classmates where we raised in excess of 5000 Euro for Building supplies, Following the Fundraising in Ireland a team of Teachers and Students flew to work alongside the families in the construction of their new home. In Romania I got the chance to Drywall, plaster, lay foundation and work as part of a team. To date it is one of my proudest achivement.",
        },

    ]

    return (
        <>
            {
                About.map((props) => <Cards
                    Title={props.Title}
                    Disc={props.Disc}
                    Link={props.Link}
                />)
            }
        </>
    )
}