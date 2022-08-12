require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
const indexRouter = require('./routes/index.routes')

// Routes
app.use('/', indexRouter)

// Start Express App
mongoose
  .connect("mongodb://localhost:27017/ShoppingCart")
  .then((x) => {
    console.log(
      `Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`
    );
  })
  const server = app.listen(PORT, () =>
  console.log(`Connected to http://localhost:${PORT}`)
);

