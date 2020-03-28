const greet =(firstName,lastName, callback)=>{
    console.log(`Hi ${firstName} ${lastName}`);
    callback();
}

module.exports = 
    greet;
//module.exports={greet};
