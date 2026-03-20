require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const userRoute = require('./routes/userRoute')
const logger = require('./middlewares/logger')
const redisLimiter = require('./middlewares/redisLimiter')

app.use(cors())
app.use(express.json())
app.use(logger)
app.use(redisLimiter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/user", userRoute);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})