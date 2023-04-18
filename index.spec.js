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
})