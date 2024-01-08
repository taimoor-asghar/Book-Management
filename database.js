const mongoose = require('mongoose')

async function connectDB(url){
    return mongoose.connect(url).then(()=>{
        console.log('Database Connected')
    }).catch((err)=>{
        console.log('Error : '+ err)
    });;
}

module.exports = {connectDB}