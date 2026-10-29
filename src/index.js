

import dotenv from 'dotenv'
import connectDB from './db/index_db.js'

dotenv.config({
    path : './.env'
})

console.log(
    'URI loaded:',
    process.env.MONGODB_URL?.startsWith('mongodb')
);


connectDB()































// First approach 



// import express from 'express'
// import { error } from 'node:console';
// const app = express() 

// ;( async()=>{

//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/
//         ${DB_NAME}`)
//         app.on("error" , ()=>{
//             console.log("ERROR : ",error)
//             throw error
//         })

//         app.listen(process.env.PORT , ()=>{
//             console.log(`App is listening on port : ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log("ERROR :",error) 
//         throw error
//     }
// })()


