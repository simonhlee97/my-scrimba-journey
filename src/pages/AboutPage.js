import React from 'react'
import { GrInProgress } from 'react-icons/gr'

const scrimba_image = {
    maxWidth: '720px',
    textAlign: 'center',
    margin: 'auto',
}
const image = {
    maxWidth: '100%',
    height: 'auto',
}

export default function AboutPage() {
    return (
        <div className="page-wrapper-home">
            <div className="subHeader">
                <h2 className="text-center">About Me and This Project</h2>
            </div>
            <div style={scrimba_image}>
                <img style={image} src="https://res.cloudinary.com/ryucave/image/upload/v1626151552/Scrimba/scrimba_uh7q7y.jpg" alt="scrimba" />
            </div>

            <p>
                Hello fellow Scrimba coders. My name is Simon. I began coding about 4 years ago. I've learned WordPress themes, front-end development with JavaScript, React, VueJS, HTML, and CSS, and some backend development with NodeJS, Express, and MongoDB. The <b>Frontend Career Path</b> has been quite fun and I've learned a lot. My goal was to improve my
                UI design and React skills, so these courses were a perfect match for me.
            </p>
            <p>I've selected some projects and course notes to share on this website. All the code for this project can be found at GitHub. Feel free to clone or fork for your own use.</p>

            <p className="progress">I'll be adding projects and notes later as I complete the FrontEnd Career Path. Therefore, this project is a work in progress.</p>
            <GrInProgress style={{ fontSize: 50 }} />
        </div>
    )
}
