const express = require("express")
const mongooese = require("mongoose")
const userRoutes = require("./routes/user.route")

mongooese.connect("mongodb+srv://kidusm3l:1055967317@mernblog.0xlxsox.mongodb.net/").then(()=> {
    console.log("Database connected")
})
const app = express()
const port = 3001
app.listen(port, () => {
    console.log("App listening on port")
})

app.use('/api/user', userRoutes)



