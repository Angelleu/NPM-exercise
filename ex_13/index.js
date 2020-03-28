const express =require('express')
const app = express()
const port=3000;

//Routers
const home=require('./home.js');
const user=require('./user.js')

app.use('/',home)
app.use('/user',user)

app.listen(port,()=>console.log(`Listening on port ${port}`));
