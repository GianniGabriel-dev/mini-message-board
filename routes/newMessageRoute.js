import Router  from "express";

export const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.send("Add New Message Page"));