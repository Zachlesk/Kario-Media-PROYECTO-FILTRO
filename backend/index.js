import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import indicadores from './routes/indicadores.routes.js'
import ayudas from './routes/ayudas.routes.js'
import reportes from './routes/reportes.routes.js'
import usuarios from './routes/usuarios.routes.js'


console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());


app.use(cors({origin:"http://localhost:3000"}));

app.use("/indicadores", indicadores);
app.use("/ayudas", ayudas);
app.use("/reportes", reportes);
app.use("/usuarios", usuarios);


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})