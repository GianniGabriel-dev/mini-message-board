import { indexRouter } from "./routes/indexRoute.js"
import { newMessageRouter } from "./routes/newMessageRoute.js"
import express from "express"

const app = express()

app.use("/new", newMessageRouter)
app.use("/", indexRouter)

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`App listening in port ${PORT}`)
})