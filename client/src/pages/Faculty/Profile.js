import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import FacultyNav from '../../components/FacultyNav';

const Profile = () => {
    const store = useSelector((store) => store)
    const history = useNavigate()


    return (
        <div className='bg-light' style={{ height: '100vh' }}>
            {store.faculty.isAuthenticated ? <>
                <FacultyNav />
                <div className="container mt-5 border border-rounded p-4 m-auto bg-white">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={store.faculty.faculty.faculty.avatar} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{store.faculty.faculty.faculty.fname.toUpperCase()} {store.faculty.faculty.faculty.lname.toUpperCase()}</h5>
                                    <h5 className="card-title text-center">{store.faculty.faculty.faculty.registrationNumber}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <table className="table border">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{store.faculty.faculty.faculty.fname.toUpperCase()} {store.faculty.faculty.faculty.lname.toUpperCase()}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{store.faculty.faculty.faculty.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Registration Number</td>
                                        <td>{store.faculty.faculty.faculty.registrationNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Designation</td>
                                        <td>{store.faculty.faculty.faculty.designation}</td>
                                    </tr>
                                    <tr>
                                        <td>Department</td>
                                        <td>{store.faculty.faculty.faculty.department}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Number</td>
                                        <td>{store.faculty.faculty.faculty.facultyMobileNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Joining Year</td>
                                        <td>{store.faculty.faculty.faculty.joiningYear}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row justify-content-center mt-5 mb-3">
                                {/* <button type="submit" className="btn btn-info col-md-2 btnn">Update Profile</button> */}
                                <Link to='/faculty/updateProfile' className='btn btn-info col-md-2 btnn'>Update Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </> : (history('/adminLogin'))}
        </div>
    )
}

export default Profile
