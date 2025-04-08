import Router from "express";
import { getMessageById } from "../controller/getMessageById.js";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
const links = [
  { href: "/", text: "Messages" },
  { href: "/new", text: "Add New Message" },
];
console.log(messages.length);

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { links: links, messages: messages }); //renderiza index.ejs, le pasa links y los mensajes
});

indexRouter.post("/new", (req, res) => {
  // desestructura la req post el body de la peticion POST, los valores tienen que coincidir con el name de los input
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/"); //redirecciona a la ruta principal
});

indexRouter.get("/:id", getMessageById(links, messages)); //obtiene el mensaje por id, el id es el index del array messages
