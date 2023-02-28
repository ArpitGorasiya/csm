import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import AdminNav from '../../components/AdminNav'

const Profile = () => {

    const store = useSelector((store) => store)
    const history = useNavigate()


    return (
        <div className='bg-light' style={{ height: '100vh' }}>
            {store.admin.isAuthenticated ? <>
                <AdminNav />
                <div className="container mt-5 border border-rounded p-4 m-auto bg-white">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="https://kalasalingam.ac.in/wp-content/uploads/2021/08/Achievements-dummy-profile.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{store.admin.admin.name.toUpperCase()}</h5>
                                    <h5 className="card-title text-center">{store.admin.admin.registrationNumber}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <table className="table border">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{store.admin.admin.name.toUpperCase()}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{store.admin.admin.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Registration Number</td>
                                        <td>{store.admin.admin.registrationNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Joining Year</td>
                                        <td>{store.admin.admin.joiningYear}</td>
                                    </tr>
                                    <tr>
                                        <td>Department</td>
                                        <td>{store.admin.admin.department}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Number</td>
                                        <td>{store.admin.admin.contactNumber}</td>
                                    </tr>
                                    {/* <tr>
                                        <td>Date of Birth</td>
                                        <td>{store.admin.admin.dob}</td>
                                    </tr> */}
                                </tbody>
                            </table>
                            <div className="row justify-content-center mt-5 mb-3">
                                {/* <button type="submit" className="btn btn-info col-md-2 btnn">Update Profile</button> */}
                                {/* <Link to='/admin/updateProfile' className='btn btn-info col-md-2 btnn'>Update Profile</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </> : history('/')}
        </div>
    )
}

export default Profile
