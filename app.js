import { indexRouter } from "./routes/indexRoute.js"
import { newMessageRouter } from "./routes/newMessageRoute.js"

import { fileURLToPath } from "node:url"; // Importa una función para convertir una URL a una ruta de archivo válida
import express from "express"
import path  from "node:path";

const app = express()
const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename); 

app.use(express.urlencoded({ extended: true })); // Middleware para parsear el body de las peticiones POST

// Configura la carpeta donde estarán las vistas (plantillas EJS)
app.set("views", path.join(__dirname, "views"));
// Configura EJS como motor de plantillas
app.set("view engine", "ejs");

// Establece la ruta de la carpeta 'public' donde se encuentran los archivos estáticos, esto permite que los usuarios puedan acceder a archivos como imágenes, CSS y JS
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/new", newMessageRouter)  
app.use("/", indexRouter)  


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`App listening in port ${PORT}`)
})