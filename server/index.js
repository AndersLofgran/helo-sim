require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authCtrl')
const crudCtrl = require('./crudCtrl')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    secret: SESSION_SECRET
  })
)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
  console.log('DB connected')
})


app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.get('/api/posts/:userid', crudCtrl.getAllPosts)