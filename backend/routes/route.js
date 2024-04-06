const express = require('express')
const route = express.Router()
const { userSingup, userLogin } = require('../controllers/userController')
const uplode = require('../middleware/fileuplode')
const auth = require('../middleware/auth')


route.post('/signup', uplode.single('profile'), userSingup)
route.post('/login', userLogin)

module.exports = route