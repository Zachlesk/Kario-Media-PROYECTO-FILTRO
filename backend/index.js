import dotenv from 'dotenv';
import express from 'express';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})