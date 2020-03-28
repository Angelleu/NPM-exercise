const http =require('http');
const port=3001;

/*const requestHandler =(request,response) =>{
    console.log(request.url)
    response.end('Congrats you\'re using your first Node.js Web Server')
}*/

const server=http.createServer((req,res)=>{
    res.end('Congrats you\'re using your first Node.js Web Server')
})

server.listen(port,err=>{
    if (err){
        return console.log(`Unable to start the server on port ${port}`)
    }
    console.log(`This HTTP server is running on port ${port}`);
})
