const mongoose = require('mongoose')



//connect storage
const DB = process.env.DATABASE
mongoose.set('strictQuery', false)
mongoose.connect(DB).then(()=>{
  console.log(`mongoDb connected successfully...`)
}).catch((err)=>{
   console.log(`error : ${err}`)
})