import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiStation } from 'react-icons/bi'

export default function Header() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <header>
            <div className="container-nav">
                <div>
                    <h1 className="site-title">
                        <BiStation />
                        &nbsp; <Link to="/">Simon's Scrimba-Station</Link>
                    </h1>

                    <p className="subtitle">{current}</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/vanilla">VanillaJS Projects</Link>
                        </li>
                        <li>
                            <Link to="/react">React Projects</Link>
                        </li>
                        <li>
                            <Link to="/notes">Course Notes</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
