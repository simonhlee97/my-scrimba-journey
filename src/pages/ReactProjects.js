import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
// import SubMenu from '../global-components/SubMenu'
// icons
import { CgNotes } from 'react-icons/cg'
import { BiCameraMovie } from 'react-icons/bi'
// react projects
import MovieApp from '../react-projects/movie-app/MovieApp'
import Netflix from '../react-projects/netflix/src/Netflix'
import ItemsApp from '../react-projects/todos/ItemsApp'
import Capstone from '../react-projects/capstone/Capstone'
import reactProjectStyle from './reactProject.module.css'

export default function ReactProjects() {
    return (
        <>
            <div className="page-wrapper">
                <div className={reactProjectStyle.subHeader}>
                    <div className={reactProjectStyle.tiltinbottom1}>
                        <h2 className="text-center">React Projects</h2>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/react/movieapp">
                                        <span className="submenu-btn">
                                            <BiCameraMovie />
                                            Movie Search
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/react/todos">
                                        <span className="submenu-btn">
                                            <CgNotes />
                                            Todos
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/react/netflix">
                                        <span className="submenu-btn">
                                            <BiCameraMovie />
                                            Netflix
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/react/buypics">
                                        <span className="submenu-btn">
                                            <CgNotes />
                                            PicStore
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <Switch>
                    <Route path="/react/movieapp">
                        <div className={reactProjectStyle.swingintopfwd}>
                            <MovieApp />
                        </div>
                    </Route>
                    <Route path="/react/netflix">
                        <div className={reactProjectStyle.swingintopfwd}>
                            <Netflix />
                        </div>
                    </Route>
                    <Route path="/react/buypics">
                        <div className={reactProjectStyle.swingintopfwd}>
                            <Capstone />
                        </div>
                    </Route>
                    <Route path="/react/todos">
                        <div className={reactProjectStyle.swingintopfwd}>
                            <ItemsApp />
                        </div>
                    </Route>
                </Switch>
            </div>

            {/* <div className="container">
                <h2 className="text-center title">React Projects</h2>
                <SubMenu>
                    <nav>
                        <ul>
                            <li>
                                <span className="submenu-btn" onClick={() => switchComponent('movieapp')}>
                                    <BiCameraMovie />
                                    Movie Search App
                                </span>
                            </li>
                            <li>
                                <span className="submenu-btn" onClick={() => switchComponent('netflix')}>
                                    <BiCameraMovie />
                                    Netflix Clone Project
                                </span>
                            </li>
                            <li>
                                <span className="submenu-btn" onClick={() => switchComponent('buyPics')}>
                                    <CgNotes />
                                    BuyPics (Capstone project)
                                </span>
                            </li>
                            <li>
                                <span className="submenu-btn" onClick={() => switchComponent('todos')}>
                                    <CgNotes />
                                    Todos App
                                </span>
                            </li>
                        </ul>
                    </nav>
                </SubMenu>
            </div> */}
            {/* {activeComponent === 'movieapp' && <MovieApp />}
            {activeComponent === 'netflix' && <Netflix />}
            {activeComponent === 'todos' && <Todos />}
            {activeComponent === 'buyPics' && <Capstone />} */}
        </>
    )
}
