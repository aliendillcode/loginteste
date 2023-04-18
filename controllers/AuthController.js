const LoginValidate = require('../class/auth')
const User = require('../models/User')

module.exports = class AuthController{

    static showHome(req, res){
        res.status(200).json({message: 'Bem vindo à Home!'})
    }

    static async loginAuth(req, res){
        const {username, password} = req.body

        if(!username || !password){
            res.status(401).json({error_message: 'Informe usuário e senha!'})
            return
        }

        const loginvalidate = new LoginValidate(username, password)
        const userType = loginvalidate.checkUserType()

        console.log(userType)

        // const user = new User()
        // console.log(user.findOne(userType, username))

        
        
        // if(!loginvalidate.checkDataMatch()){
    
        //     res.status(401).json({error_message: 'login não autorizado'})
        // }else{
        //     res.status(200).json({success_message: 'login autorizado'})
        // }   
    }
}