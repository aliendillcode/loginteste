const md5 = require('md5')
const isemail = require('isemail')


module.exports = class LoginValidate{

    constructor(sentUser, sentPassword){         
        this._sentUser = sentUser
        this._sentPassword = sentPassword
         
           
    }

    get sentUser(){
        return this._sentUser
    }

    get sentPassword(){
        return this._sentPassword
    }
    

checkUserType = function(){    
    if(isemail.validate(this.sentUser)){
        return 'email'
    }else if(!isNaN(this.sentUser)){
        return 'cpf'
    }else{
        return 'username'
    }
    
}


checkDataMatch = function(){
        
    if(this.sentUser == userChecked && this.dbUser.savedPassword == md5(this.dbUser.savedSalt+this.sentPassword))
    return true
    
    }
}