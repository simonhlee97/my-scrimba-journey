import React from 'react'
import { FaGithubAlt } from 'react-icons/fa'

export default function HomePage() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = 'morning'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
    } else {
        timeOfDay = 'evening'
    }
    return (
        <div className="container homepage">
            <h1>Hello, and good {timeOfDay}</h1>
            <p>
                Here are some small projects I built (along with some course notes) while going through Scrimba's Frontend Career Path. This website was built with VueJS! Just kidding. React, of course.&nbsp;
                <a href="https://scrimba.com/" target="_blank" rel="noreferrer">
                    Scrimba.com
                </a>
                &nbsp; is an online learning platform for aspiring web developers. They have many excellent free courses, as well as a Pro Member subscription option which includes premium content.
            </p>

            <p>
                <FaGithubAlt style={{ fontSize: 30 }} /> You can clone or fork the &nbsp;
                <a href="https://github.com/simonhlee97/my-scrimba-journey" target="_blank" rel="noreferrer">
                    GitHub repo for this project
                </a>
                . Feel free to give me feedback.
            </p>

            <p>Here are some tools I used to help me build this project:</p>
            <ul>
                <li>
                    <a href="https://react-icons.github.io/react-icons">React Icons</a>
                </li>
                <li>
                    <a href="https://github.com/facebook/create-react-app">Create-React-App</a>
                </li>
                <li>
                    This website is deployed on <a href="https://netlify.com">Netlify</a>
                </li>
            </ul>
        </div>
    )
}
