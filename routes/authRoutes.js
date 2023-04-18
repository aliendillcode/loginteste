const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

    router.post('/login', AuthController.loginAuth)
    router.get('/', AuthController.showHome)    


module.exports = router