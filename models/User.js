class User{
     
    constructor(){        
        this._UserInMemory = [{
            id: 1,
            salt: 'SaLt',
            password: '2b5648e511974189e71b31d1a2710156',
            username: 'myuser',
            email: 'myuser@gmail.com',
            CPF: '33344455566'  
        }] 
        this._filterdUser
    }


    get filterdUser(){
        return this._filterdUser
    }

    set filterdUser(value){
        this._filterdUser = value
    }

    get UserInMemory(){
        return this._UserInMemory
    }

    set UserInMemory(object){
        object.id = Math.floor(Date.now() * Math.random()).toString(36)
        this._UserInMemory.push(object)
    }

    finOne(type, username) {
        switch(type){
            case 'email':
            this.filterdUser((this.UserInMemory.filter(user => user.email == username)))
            return this.filterdUser
            break                   
        
        
        }
    }    

}

module.exports = User


