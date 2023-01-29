<<<<<<< HEAD
/*import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
=======
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connectDb} from "../backend/config/database.js"
import productsRouter from "./routes/user.route.js" 

dotenv.config()
const app = express()
const port= process.env.PORT || 5000


connectDb()
app.use(cors())
app.use(express.json())
app.get( '/', function ( req, res ) {
  res.json( { message: "hola mundo" } );
} );
app.use(productsRouter)

app.listen(port, ()=>{console.log(`listent in port ${port}`)})





>>>>>>> origin/dylan

