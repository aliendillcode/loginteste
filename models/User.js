
class User{
     
    constructor(){        
        this._UserInMemory = [{
            id: 'hs1530pv',
            salt: 'SaLt',
            password: '2b5648e511974189e71b31d1a2710156',
            username: 'myuser',
            email: 'myuser@gmail.com',
            CPF: '33344455566'  
        }, 
        {
            id: 'dizz16i7',
            salt: 'SaLt',
            password: '2b5648e511974189e71b31d1a2710156',
            username: 'myuser2',
            email: 'myuser2@gmail.com',
            CPF: '11122233344'  
        }] 
        this._filterdUser
    }


    get filterdUser(){
        return this._filterdUser
    }

    set filterdUser(value){
        this._filterdUser = value
    }

    get userInMemory(){
        return this._UserInMemory
    }

    set userInMemory(object){
        object.id = Math.floor(Date.now() * Math.random()).toString(36)
        this._UserInMemory.push(object)
    }

    findOne = function(type, username) {  
        
        switch(type){
            case 'email':
                this.filterdUser = (this.userInMemory.filter(user => user.email == username))              
                break                   
            case 'cpf':
                this.filterdUser = (this.userInMemory.filter(user => user.CPF == username))               
                break
            case 'username':
                this.filterdUser = (this.userInMemory.filter(user => user.username == username))             
                break
            default:
                return false
                break
        }
        return this.filterdUser
    }    

}

module.exports = User


