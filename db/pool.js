import dotenv from "dotenv";
dotenv.config(); //esto carga las variables de entorno

import mysql from "mysql2/promise";


export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT 
});