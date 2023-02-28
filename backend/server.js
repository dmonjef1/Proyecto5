import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import {connectDb} from "../backend/config/database.js"
import productsRouter from "./routes/user.route.js" 
import { MongoClient } from "mongodb";


dotenv.config()
 const app = express()
 const port= process.env.PORT || 5002
 const url= process.env.MONGODB
 const client = new MongoClient(url)


connectDb()
app.use(cors())
app.use(express.json())
app.get( '/products', async function ( req, res ) {
  try{
    await client.connect()
    const documentos= client.db ("Productos").collection("products")
    const docs = await documentos.find({}).toArray()
    res.json(docs)
  } catch (err){
    console.log( err);
    res.status(500).json({error: "Server error"})
  }
});
app.get( '/products/:slug', async function ( req, res ) {
  try{
    await client.connect()
    const documentos= client.db ("Productos").collection("products")
    const docs = await documentos.find({slug:req.params.slug}).toArray()
    res.json(docs)
  } catch (err){
    console.log( err);
    res.status(500).json({error: "Server error"})
  }
});

app.post("/products", async function(req, res){
  try{
    await client.connect();
    const documentos = client.db("Productos").collection("products");
    const result= await documentos.insertOne(req.body);
    res.json(result[0]);
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }

})

app.use(productsRouter)

app.listen(port, ()=>{console.log(`listent in port ${port}`)})





