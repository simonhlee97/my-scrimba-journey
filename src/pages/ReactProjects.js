import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
// import SubMenu from '../global-components/SubMenu'
// icons
import { CgNotes } from 'react-icons/cg'
import { BiCameraMovie } from 'react-icons/bi'
// react projects
import MovieApp from '../react-projects/movie-app/MovieApp'
import Netflix from '../react-projects/netflix/src/Netflix'
import Todos from '../react-projects/todos/Todos'
import Capstone from '../react-projects/capstone/Capstone'

export default function ReactProjects() {
    // const [activeComponent, setActiveComponent] = useState('movieapp')

    // const switchComponent = useCallback(
    //     (newActiveComponent) => {
    //         setActiveComponent(newActiveComponent)
    //     },
    //     [setActiveComponent]
    // )

    return (
        <>
            <div className="container">
                <h2 className="text-center title">React Projects</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/react/movieapp">
                                <span className="submenu-btn">
                                    <BiCameraMovie />
                                    Movie Search App
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
                                    Netflix Project
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/react/buypics">
                                <span className="submenu-btn">
                                    <CgNotes />
                                    BuyPics (Capstone)
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/react/movieapp">
                        <MovieApp />
                    </Route>
                    <Route path="/react/netflix">
                        <Netflix />
                    </Route>
                    <Route path="/react/buypics">
                        <Capstone />
                    </Route>
                    <Route path="/react/todos">
                        <Todos />
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
