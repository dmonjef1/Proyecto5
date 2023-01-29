import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const URI= process.env.MONGODB

export function connectDb(){
    try{
    mongoose.set("strictQuery", true);
    console.log('Conectando a la Base de Datos...');
    mongoose.connect(URI);
    console.log('Conectado a la  Base de Datos');
    }catch(error){
        console.log(`Error al conectar con la Base de Datos: ${error}`);
        process.exit(1);
    }
}


