const express = require('express')
const app = express()

app.use(express.json())

const authRoutes = require('./routes/authRoutes')


app.use('/', authRoutes)
app.get('/', authRoutes)
app.get('*', (req,res)=>{
    res.status('404').json({message: 'Página Não Encontrada'})
})

module.exports = app









