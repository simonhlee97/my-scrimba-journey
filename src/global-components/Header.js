import React from 'react'
import { SiJavascript } from 'react-icons/si'
import { FaReact, FaInfoCircle } from 'react-icons/fa'
import { CgNotes } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import styles from './header.module.css'

export default function Header() {
    return (
        <div className="header-container">
            <header className={styles.header}>
                <h1 className={styles.logo}>
                    <Link to="/">My Scrimba Journey</Link>
                    <br />
                    <nav className={styles.nav}>
                        <Link className={styles.anchor} to="/vanilla">
                            <SiJavascript />
                        </Link>
                        <Link className={styles.anchor} to="/react">
                            <FaReact />
                        </Link>
                        <Link className={styles.anchor} to="/notes">
                            <CgNotes />
                        </Link>
                        <Link className={styles.anchor} to="/about">
                            <FaInfoCircle />
                        </Link>
                    </nav>
                </h1>
            </header>
        </div>
    )
}
