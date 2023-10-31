const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/bhogadedb")
.then(()=>{
    console.log('connection succed')
})
.catch((err)=>{
   console.log('faild....')
})

const mySchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    passward:{
        type:Number,
        required:true
    }
})

const myCollection=mongoose.model('myCollection',mySchema)
module.exports=myCollection;