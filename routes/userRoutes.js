const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

    
    router.get('/logout', UserController.logout)    


module.exports = router