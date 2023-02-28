const express = require('express')
const passport = require('passport')
const router = express.Router()
const upload = require('../utils/multer')

const { checkAttendence, studentLogin, updatePassword, forgotPassword, postOTP, updateProfile, getAllSubjects, getMarks } = require('../controller/studentController')

router.post('/login', studentLogin)

router.post('/forgotPassword', forgotPassword)

router.post('/postOTP', postOTP)

//UPLOAD PROFILE
router.post('/updateProfile', passport.authenticate('jwt', { session: false }),
    upload.single("avatar"), updateProfile)

//UPLOAD PASSWORD
router.post('/updatePassword', passport.authenticate('jwt', { session: false }), updatePassword)


module.exports = router