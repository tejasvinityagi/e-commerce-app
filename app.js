const express = require('express')
const app = express()

const notfound = require('./starter/middleware/not-found')
const errorMiddleware = require('./starter/middleware/errorhandler')

//middleawre

app.use(express.json())
// /routes
app.get('/',(req, res)=>{
  res.send('<h1>store api</h1> <a href="/api/vi/products> products route')
})

// products route
// app.use(notfound)
// app.use(errorMiddleware)

async function start() {
  // CONNECT DB
  try {
    app.listen(3005)
  } catch (error) {
    console.log(error)
  }
}

start()