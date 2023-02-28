import { SET_ADMIN, GET_SUBJECTS, GET_NOTICE } from '../actionTypes'
import isEmpty from '../validation/is-empty'

const initialState = {
    isAuthenticated: false,
    admin: {},
    adminAddFacultyFlag: false,
    adminAddStudentFlag: false,
    adminAddAdminFlag: false,
    adminAddSubjectFlag: false,
    adminAddNoticeFlag: false,
    allSubject: {},
    allFaculty: [],
    allStudent: [],
    allNotice: [],
    allSubject: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                admin: action.payload
            }
        case GET_SUBJECTS: {
            return {
                ...state,
                allSubject: action.payload
            }
        }
        case GET_NOTICE: {
            return {
                ...state,
                allNotice: action.payload
            }
        }
        case "ADMIN_ADD_FACULTY_FLAG": {
            return {
                ...state,
                adminAddFacultyFlag: action.payload
            }
        }
        case "ADMIN_ADD_STUDENT_FLAG": {
            return {
                ...state,
                adminAddStudentFlag: action.payload
            }
        }
        case "ADMIN_ADD_SUBJECT_FLAG": {
            return {
                ...state,
                adminAddSubjectFlag: action.payload
            }
        }
        case "ADMIN_ADD_ADMIN_FLAG": {
            return {
                ...state,
                adminAddAdminFlag: action.payload
            }
        }
        case "ADMIN_ADD_NOTICE_FLAG": {
            return {
                ...state,
                adminAddNoticeFlag: action.payload
            }
        }
        case "GET_ALL_FACULTY": {
            return {
                ...state,
                allFaculty: action.payload
            }
        }
        case "GET_ALL_STUDENT": {
            return {
                ...state,
                allStudent: action.payload
            }
        }
        case "GET_ALL_SUBJECT": {
            return {
                ...state,
                allSubject: action.payload
            }
        }
        case "GET_ALL_NOTICE": {
            return {
                ...state,
                allNotice: action.payload
            }
        }
        default:
            return state
    }
}



export default adminReducer