import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import logo from '../image/logo.png'

const StudentNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/student/home">
                        <img src={logo} style={{ width: 80 }} height="80px" alt="logo" className='p-1' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">NAME</NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="#">ADD STUDENT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">ADD FACULTY</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">ADD SUBJECT</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/student/home">DASHBOARD</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/student/attendence">ATTENDENCE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/student/result">RESULT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/student/subjects">SUBJECTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/s">ASSIGNMENT</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <li className="dropdown p-3" style={{ listStyle: 'none' }}>
                            <NavLink className="nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-regular bt fa-user border rounded-5 p-2 text-white rounded-circle"></i> STUDENT
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item bg-white text-dark" to="/student/profile">PROFILE</NavLink></li>
                                <li><NavLink className="dropdown-item bg-white text-dark" to="#">UPDATE PASSWORD</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button style={{ listStyle: "None" }} type="button" className="btn"><li>LOGOUT</li></button></li>
                            </ul>
                        </li>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </nav>
        </div>
    )
}

export default StudentNav
