const express = require('express')
const app = express()

app.use(express.json())

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')


app.use('/', authRoutes)
app.use('/', userRoutes)
//app.get('/', authRoutes)
app.get('*', (req,res)=>{
    res.status('404').json({message: 'Página Não Encontrada'})
})

module.exports = app









