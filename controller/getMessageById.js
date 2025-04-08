export const getMessageById = (links, messages) => (req, res) => {
  const messageId = req.params.id; //obtiene el id del mensaje de la url
  const message = messages[messageId]; //obtiene el mensaje del array messages
  if (!message) {
    return res.status(404).render("not-found", { links });
  }
  res.render("message", { links: links, message: message }); //renderiza message.ejs y le pasa los links y el mensaje
};
