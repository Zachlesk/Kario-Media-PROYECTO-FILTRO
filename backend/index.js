import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import indicadores from './routes/indicadores.routes.js'
import reportes from './routes/reportes.routes.js';

console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());


app.use(cors({origin:"http://localhost:3000"}));


//paths (ignorar si acaso)
app.use("/reportes", reportes)

app.use("/indicadores", indicadores)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})