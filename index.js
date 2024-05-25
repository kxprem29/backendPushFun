require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('<a href="https://x.com/amused_kxp">amused_kxp</a>')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Prem</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai n Code</h2>")
})
app.get('/shivanshu',(req,res)=>{
    res.send("<h2>Shivanshu is a donkey.</h2>")
})
app.get('/premanshu',(req,res)=>{
    res.send("<h2>Premanshu is a legend.</h2>")
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})