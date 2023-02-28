import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubjects } from '../../redux/action/studentAction'
import { useNavigate } from 'react-router-dom'
import StudentNav from '../../components/StudentNav'

const Subjects = () => {

  const store = useSelector((store) => store)
  const history = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllSubjects())
  }, [])

  return (
    <>
      {store.student.isAuthenticated ? <>
        <div className='bg-light' style={{ height: '100vh' }}>
          <StudentNav />
          <div className="container mt-5 p-2 bg-white">
            <div className="row justify-content-center mt-3">
              <div className="col-md-10">
                <table className="table border">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Subject Code</th>
                      <th scope="col">Subject Name</th>
                      <th scope="col">Year</th>
                      <th scope="col">Total Lectures</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      store.student.allSubjects.map((res, index) =>
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{res.subjectCode}</td>
                          <td>{res.subjectName}</td>
                          <td>{res.year}</td>
                          <td>{res.totalLectures}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </> : history('/')
      }
    </>
  )
}

export default Subjects
