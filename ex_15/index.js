const express=require('express')
const app =express()
const port=3000

const requestTime =(req,res,next)=>{
    const message =`Request: ${req.baseUrl} ${Date.now()}`;
    console.group(message);
    next();
}

app.use(requestTime);

app.get('/',(req,res)=>{
    res.status(200).json({
        "status": 200,
        "message": "Este request/response está OK"
    })
})
/*app.get('/',(req,res)=>{
    res.json({
        "status": 200,
        "message": "Este request/response está OK"
    })
})*/

app.listen(port,()=>console.log(`Listening on port ${port}`));
