const User = require('../models/User')
const helper = require('../helpers/auth')

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
        
        const userType = helper.checkUserType(helper.sanitizeUser(username))
 
        const user = new User()
        const userFilterd = user.findOne(userType, helper.sanitizeUser(username))


        if(userFilterd.length < 1){
            res.status(401).json({error_message: 'Usuário ou senha Inválido'})
            return
        }        
        
        if(!helper.checkPasswordMatch(...userFilterd, password)){
    
            res.status(401).json({error_message: 'login não autorizado'})
        }else{
            res.status(200).json({success_message: 'login autorizado'})
        }   
      }

      static logout(){
        
      }
}