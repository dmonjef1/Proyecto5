import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"


const app = express()
app.get("/", (req,res)=>{
  res.send("ok!")
})

app.use(express.json())

dotenv.config()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB)
.then(()=>{console.log("mongo connect") })
.catch(error =>{
    console.log(error)
})

app.listen(5000, ()=>console.log(`Servidor Conectado en puerto : 5000`))

