const express = require('express')
const connectToMongo = require("./db.js")
const User = require('./models/User.js')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
connectToMongo()

app.get("/",(req, res) => {
  res.status(200).json("hello world")

})

app.use("/auth", require('./routes/auth.js'))
app.use('/property', require("./routes/Property.js"))

app.listen(4000, () => {
              console.log("surver is running on port 4000")
})