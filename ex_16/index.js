const express = require('express');
const app =express();
const port=3000;
const path =require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.use('/assets',express.static('public'))

app.listen(port,()=>console.log(`Listening on port ${port}`));
