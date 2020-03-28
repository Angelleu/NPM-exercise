const express = require('express');
const oneLinerJoke=require('one-liner-joke');
//const Logger = require('logplease')
const app = express();
const port =3005;
var getRandomJoke=oneLinerJoke.getRandomJokeWithTag('IT');
//const logger = Logger.create('server')

app.get('/', (request, response) => response.send('Welcone to Node.js World'));
app.get('/jokes',(request,response)=>response.send(getRandomJoke));
console.log(getRandomJoke)
app.get('/jokes',(request,response)=>response.send(getRandomJoke[0]));
app.post("/joke",(request,response)=>response.send("my jokes are too funny, I'm not getting new ones from you.."))
app.put('/joke',(request,response)=>response.send('no, no, no.. not changing my act dude!'))
app.delete('/joke',(request,response)=>response.send('good jokes never get to old'))
app.all('/joke',(request,response)=>response.send(`I know I'm so good that you're looking for jokes everywhere`))

//app.get('/about', (request, response) => response.send('This is my about page'));
//app.get('/contact', (request, response) => response.send('Ths is my contact page'));

app.listen(port, () => console.log(`Example app listening on ${port}!`));
