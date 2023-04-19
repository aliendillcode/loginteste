const User = require('../models/User')

module.exports = class UserController{
    static logout(req, res){
        res.status(200).json({logout_success: 'Logout Realizado'})
    }
}