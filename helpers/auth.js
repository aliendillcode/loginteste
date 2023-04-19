const md5 = require('md5')
const isemail = require('isemail')

module.exports.sanitizeUser = function(value){
    return value.replace(/[^a-zA-Z0-9@.\s]/g,'').replace(/ /g,'')
}

module.exports.checkUserType = function(username){    
    if(isemail.validate(username)){
        return 'email'
    }else if(!isNaN(username)){
        return 'cpf'
    }else{
        return 'username'
    }    
}

module.exports.checkPasswordMatch = function(user, password){
        
    if(user.password == md5(user.salt+password))
    return true
    
    }