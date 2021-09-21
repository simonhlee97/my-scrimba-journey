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
        <div className="page-wrapper-home">
            <div className="subHeader">
                <h1>Hello, and good {timeOfDay}</h1>
            </div>

            <h4>
                This is a small collection of projects I built while going through{' '}
                <a href="https://scrimba.com/learn/frontend" rel="noreferrer" target="_blank">
                    Scrimba's Frontend Career Path
                </a>
                .
            </h4>

            <h4>
                <a href="https://scrimba.com/" target="_blank" rel="noreferrer">
                    Scrimba.com
                </a>{' '}
                is an online learning platform for aspiring web developers. They have many excellent free courses, as well as a Pro Member subscription option which includes premium content.
            </h4>

            <p>
                <a href="https://github.com/simonhlee97/my-scrimba-journey" target="_blank" rel="noreferrer">
                    GitHub repo for this project <FaGithubAlt style={{ fontSize: 16 }} />
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
                <li>Styled Components</li>
                <li>React Router</li>
                <li>react-codepen-embed</li>
            </ul>
        </div>
    )
}
