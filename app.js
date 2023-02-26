const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')



// (119.157.65.22/32)


//env
dotenv.config({path:'./.env'})
require('./db/conn')
//it has all data

const User = require('./model/userSchema')

//convert into json
app.use(express.json());



const port = process.env.PORT


//linking router file
app.use(require('./router/auth'))




// //Middleware
// const middleWare= (req,res,next)=>{
//   console.log('hello from middeware')
//   next()
// }


// middleWare()

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

// app.get('/about',middleWare,(req ,res)=>{
//   console.log('hello from middeware two')
//   res.send(`hello from about`)
// })
// app.get('/contact',(req ,res)=>{
//     res.send(`hello from contact`)
//   })

app.listen(8000,()=>{
    console.log(`server is running at ${port}`)
})