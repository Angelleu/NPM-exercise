const express =require('express')
const path=require('path')
const app =express();


app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'index.html')));
app.get('/products',(req,res)=>res.sendFile(path.join(__dirname,'products.html')));


app.listen(3000,()=>console.log(`listening on port 3000`))

