import React from 'react'
import { GrInProgress } from 'react-icons/gr'

const scrimba_image = {
    maxWidth: '720px',
}
const image = {
    maxWidth: '100%',
    height: 'auto',
}

export default function AboutPage() {
    return (
        <div className="container">
            <h2>About Me and This Project</h2>
            <div style={scrimba_image}>
                <img style={image} src="https://res.cloudinary.com/ryucave/image/upload/v1626151552/Scrimba/scrimba_uh7q7y.jpg" alt="scrimba" />
            </div>

            <p>
                Hello fellow Scrimba coders. My name is Simon. I began coding about 4 years ago. I've learned WordPress themes, front-end development with JavaScript, React, VueJS, HTML, and CSS, and some backend development with NodeJS, Express, and MongoDB. The <b>Frontend Career Path</b> has been quite fun and I've learned a lot. My goal was to improve my
                UI design and React skills, so these courses were a perfect match for me.
            </p>
            <p>I've selected some projects and course notes to share on this website. All the code for this project can be found at GitHub. Feel free to clone or fork for your own use.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M23 10v4h-22v-4h22zm1-1h-24v6h24v-6zm-8 2h-14v2h14v-2z" />
            </svg>
            <p className="progress">This project is still a work in progress. I'll continue to add projects and notes.</p>
        </div>
    )
}
