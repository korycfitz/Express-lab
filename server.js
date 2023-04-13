// import modules

import express from 'express'
// import the todo data
import { sibilings } from './data/sibiling-data.js'
// we could also do:

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes

app.get('/', function(req, res) {
  res.send('<h1>hello world</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/sibilings', function(req, res) {
  res.render('sibilings/index', {
    sibilings: sibilings
  })
})
// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

