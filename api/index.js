const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = new express()

app.use(express.json())
app.use(cors())

let port = process.env.PORT || 4000

app.listen(port, () => console.log('Server started on port ' + port + '.'))

mongoose.connect('mongodb://localhost:27017/ecommAgg', {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true})
const connection = mongoose.connection
connection.once('open', () => console.log('Connected to database.'))

const regRouter = require('./routes/reg')
const localAuthRouter = require('./routes/localAuth')

app.use('/reg', regRouter)
app.use('/local-auth', localAuthRouter)