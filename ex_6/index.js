const greet =(firstName,lastName, callback)=>{
    console.log(`Hi ${firstName} ${lastName}`);
    callback();
}
greet('Angel','Leu',()=>console.log('This code gets excuted after the greet function call'));