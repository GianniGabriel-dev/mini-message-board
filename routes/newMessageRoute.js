import Router from "express";

export const newMessageRouter = Router();
const links = [
  { href: "/", text: "Messages" },
  { href: "/new", text: "Add New Message" },
];

newMessageRouter.get("/", (req, res) => {
  res.render("newMessage", { links: links }); //renderiza newMessage.ejs y le pasa los links
});
