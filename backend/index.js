import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import { db } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import ContactRoutes from './routes/contactRoutes.js'
import supplierRoutes from './routes/supplierRoutes.js'
import authRoutes from './routes/authRoutes.js'


//Variables de entorno
dotenv.config();


//Configurar la app
const app = express();

//Leer datos body
app.use(express.json());

//Conexión a BD
db();

//Configurar CORS
const whitelist = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function(origin, callback){
        if (whitelist.includes(origin)) {
            //Permite conexion
            callback(null, true)
        } else {
            //No permite conexion
            callback(new Error('Cors error'))
        }
    }
}
app.use(cors(corsOptions))

//Definir la ruta
app.use('/api/user', userRoutes);
app.use('/api/contact', ContactRoutes);
app.use('/api/supplier', supplierRoutes);
app.use('/api/auth', authRoutes);


//Definir puerto
const PORT = process.env.PORT || 4000

//Arrancar app
app.listen(PORT, () => {
    console.log( colors.blue ('El servidor se está ejecutando en el puerto:', colors.blue.bold(PORT)))
}); 