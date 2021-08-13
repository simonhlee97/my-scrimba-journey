import React, { useState, useCallback } from 'react'
import { BiGame } from 'react-icons/bi'
import { AiOutlineDatabase } from 'react-icons/ai'
import SubMenu from '../global-components/SubMenu'
import Codepen from 'react-codepen-embed'

function Momentum() {
    return (
        <div className="momentum">
            <Codepen title="Momentum Clone" height={450} defaultTab="result" hash="NWjxqBq" user="simonhlee97" loader={() => <div>Loading...</div>} />
        </div>
    )
}

function Pacman() {
    return (
        <div className="pacman">
            <Codepen title="Pacman Clone" height={450} defaultTab="result" hash="xxdZzbR" user="simonhlee97" loader={() => <div>Loading...</div>} />
        </div>
    )
}

export default function VanillaPage() {
    const [activeProject, setActiveProject] = useState('momentum')

    const modifyActiveProject = useCallback(
        (newActiveProject) => {
            setActiveProject(newActiveProject)
        },
        [setActiveProject]
    )
    return (
        <div className="page-wrapper-home">
            <div className="subHeader">
                <h2 className="text-center">Vanilla JS Projects</h2>
                <SubMenu>
                    <nav className="menu-vanilla">
                        <ul>
                            <li className="submenu-btn" onClick={() => modifyActiveProject('momentum')}>
                                <AiOutlineDatabase /> Momentum Project
                            </li>
                            <li className="submenu-btn" onClick={() => modifyActiveProject('pacman')}>
                                <BiGame /> Pacman
                            </li>
                        </ul>
                    </nav>
                </SubMenu>
            </div>

            {activeProject === 'pacman' && <Pacman />}
            {activeProject === 'momentum' && <Momentum />}
        </div>
    )
}
