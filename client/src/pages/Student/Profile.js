import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import StudentNav from '../../components/StudentNav';

const Profile = () => {
    const store = useSelector((store) => store)
    const history = useNavigate()

    return (
        <>
            {
                store.student.isAuthenticated ? <>
                    <div className='bg-light' style={{ height: '100vh' }}>
                        <StudentNav />
                        <div className="container mt-5 border border-rounded p-4 m-auto bg-white">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.student.student.student.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{store.student.student.student.fname.toUpperCase()} {store.student.student.student.lname.toUpperCase()}</h5>
                                            <h5 className="card-title text-center">{store.student.student.student.registrationNumber}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <table className="table border">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{store.student.student.student.fname.toUpperCase()} {store.student.student.student.lname.toUpperCase()}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{store.student.student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{store.student.student.student.studentMobileNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Father Contact Number</td>
                                                <td>{store.student.student.student.fatherMobileNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Section</td>
                                                <td>{store.student.student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <td>Joining Year</td>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="row justify-content-center mt-5 mb-3">
                                        {/* <button type="submit" className="btn btn-info col-md-2 btnn">Update Profile</button> */}
                                        <Link to='/student/updateProfile' className='btn btn-info col-md-2 btnn'>Update Profile</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : history('/adminLogin')
            }
        </>
    )
}

export default Profile
