const express =require('express')
const app = express()
const path = require('path')
const port =3001


app.get('/',(req,res)=>{res.status(200).sendFile(path.join(__dirname,'index.html'))});

app.get('/products',(req,res)=>{res.status(500).send(`Server error, pleas try it later`)});

app.get('/users',(req,res)=>{res.status(404).sendFile(path.join(__dirname,'404.html'))});

app.use(express.static(__dirname+'/public/'))

app.listen(port,()=>console.log(`listening on port ${port}`))
