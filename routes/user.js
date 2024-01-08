const express = require('express')
const router = express.Router()
const {userSignup, userLogin} = require('../controller/user')

router.route('/signup').post(userSignup)

router.route('/login').post(userLogin)

module.exports = router