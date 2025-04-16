import Router from "express";
import { getMessage } from "../controller/getMessageById.js";
import { getAllMessages, createMessage} from "../db/queries.js"; //imports de la queries sql


const links = [
  { href: "/", text: "Messages" },
  { href: "/new", text: "Add New Message" },
];

export const indexRouter = Router();

indexRouter.get("/", async(req, res) => {
  const messages = await getAllMessages(); //obtiene todos los mensajes de la base de datos
  res.render("index", { links: links, messages: messages }); //renderiza index.ejs, le pasa links y los mensajes
});

indexRouter.post("/new", async(req, res) => {
  // desestructura la req post el body de la peticion POST, los valores tienen que coincidir con el name de los input
  const { messageText, messageUser } = req.body;
  createMessage(messageUser, messageText) //crea el mensaje en la base de datos
  res.redirect("/"); //redirecciona a la ruta principal
});

indexRouter.get("/:id", getMessage(links)); //obtiene el mensaje por id, el id es el index del array messages
