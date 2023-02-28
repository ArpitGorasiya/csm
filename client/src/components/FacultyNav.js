import React, { useState, useEffect } from 'react'
import { Link,NavLink , useNavigate} from 'react-router-dom'
import './nav.css'
import logo from '../image/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { facultyLogout } from '../redux/action/facultyAction'

const FacultyNav = () => {

    const store = useSelector(store => store)
    const [email, setName] = useState("")

    useEffect(() => {

        if (store.faculty.faculty.email) {
            setName(store.faculty.faculty.email)
        }
    }, [store.faculty.faculty.email])

    const history = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history('/')
    }

    return (
        // <div>
        //     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        //         <div class="container-fluid">
        //             <a class="navbar-brand" href="#">FACULTY</a>
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li class="nav-item">
        //                         <a class="nav-link active" aria-current="page" href="#">NAME</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">UPDATE PROFILE</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">MARK ATTENDANCE</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">UPLOAD MARKS</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">UPDATE PASSWORD</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/faculty/home">
                        <img src={logo} style={{ width: 80 }} height="80px" alt="logo" className='p-1' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/faculty/home">DASHBOARD</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/faculty/attendence">MARK ATTENDENCE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/faculty/Marks">UPLOAD MARKS</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/s">SUBJECTS</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/as">ASSIGNMENT</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <li className="dropdown p-3" style={{ listStyle: 'none' }}>
                            <NavLink className="nav-link" to="/a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-regular bt fa-user border rounded-5 p-2 text-white rounded-circle"></i> FACULTY
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item bg-white text-dark" to="/faculty/profile">PROFILE</Link></li>
                                <li><Link className="dropdown-item bg-white text-dark" to="/faculty/updatePassword">UPDATE PASSWORD</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button></li>
                            </ul>
                        </li>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </nav>
        </div>
    )
}

export default FacultyNav
