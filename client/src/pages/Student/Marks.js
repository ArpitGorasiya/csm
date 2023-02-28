import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMarks } from '../../redux/action/studentAction'
import { useNavigate } from 'react-router-dom'
import StudentNav from '../../components/StudentNav'

const Marks = () => {

  const store = useSelector(store => store)
  const history = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMarks())
  }, [])

  return (
    <>
      {store.student.isAuthenticated ? <>
        <div className='bg-light' style={{ height: '100vh' }}>
          <StudentNav />
          {store.student.allMarks.Semester &&
            <div className="container mt-5 p-2 bg-white">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-1</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>601</td>
                          <td>CG</td>
                          <td>85</td>
                          <td>100</td>
                          <td>85.00%</td>
                        </tr>
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          }
        </div>
      </> : history('/')
      }
    </>
  )
}

export default Marks
