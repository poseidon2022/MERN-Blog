const express = require("express")
const mongooese = require("mongoose")

mongooese.connect("mongodb+srv://kidusm3l:1055967317@mernblog.0xlxsox.mongodb.net/").then(()=> {
    console.log("Database connected")
})
const app = express()
const port = 3001
app.listen(port, () => {
    console.log("App listening on port")
})




