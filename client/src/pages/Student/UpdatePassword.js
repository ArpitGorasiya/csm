import React from 'react'
import StudentNav from '../../components/StudentNav'

const UpdatePassword = () => {
    return (
        <div className='bg-secondary' style={{ height: '100vh' }}>
            <StudentNav />
            <div className="container mt-5 border border-rounded p-4 bg-secondary">
                <h3>STUDENT UPDATE PASSWORD</h3>
                <div className="row mt-1">
                    <div className="col p-2">
                        <form>
                            <div className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="nameId" className='mb-2'>Old Password</label>
                                        <input type="text" className="form-control" id="nameId" />
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="nameId" className='mb-2'>New Password</label>
                                        <input type="text" className="form-control" id="nameId" />
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="nameId" className='mb-2'>Confirm New Password</label>
                                        <input type="text" className="form-control" id="nameId" />
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-5 mb-3">
                                <button type="submit" className="btn btn-info col-md-2 btnn">Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePassword
