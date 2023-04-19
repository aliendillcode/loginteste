const request = require('supertest')
const app = require('./server')

describe('Test My app server',()=>{

    it('should get main route',async ()=>{

       const res = await request(app).get('/')
       expect(res.statusCode).toEqual(200)
       expect(res.body).toHaveProperty('message')
       expect(res.body.message).toBe('Bem vindo à Home!')
    })

    it('should get Login',async ()=>{
        const res = await request(app)
        .post('/login')
        .send({
            username: 'myuser',
            password: '123456789'
        })

    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('success_message')
    })

    it('should fail User Login',async ()=>{
        const res = await request(app)
        .post('/login')
        .send({
            username: 'myuser32',
            password: '123456789'
        })

    
    expect(res.statusCode).toEqual(401)
    expect(res.body.error_message).toBe('Usuário ou senha Inválido')
    })

    it('should fail Password Login',async ()=>{
        const res = await request(app)
        .post('/login')
        .send({
            username: 'myuser',
            password: '1234567891'
        })

    
    expect(res.statusCode).toEqual(401)
    expect(res.body.error_message).toBe('login não autorizado')
    })

    it('Should logout',async()=>{
        const res = await request(app).get('/logout')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('logout_success')
        expect(res.body.logout_success).toBe('Logout Realizado')
    })
})