import Router  from "express";

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
const links = [
    { href: "/" ,text:"Messages"},
    { href: "/new", text:"Add New Message"   },
];

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {links:links, messages:messages}) //renderiza index.ejs, le pasa links y los mensajes
})
