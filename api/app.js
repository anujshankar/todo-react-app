const express = require('express')
const bodyParser = require('body-parser')
const crudops = require('./crudops')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: false }))
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('../public/index')
})

app.get('/test', function (req, res) {
  res.render('../public/test/indexTest')
})

app.get('/read', function (req, res) {
  crudops.readFromDB().then(function (data) {
    console.log(data[0])
    res.send(data[0])
  })
})

app.post('/write/:data', function (req, res) {
  const stringToInsert = req.params.data
  crudops.insertInDB(stringToInsert)
    .then(function (responseId) {
      console.log('res: ', responseId[0].id)
      res.status(200).send(responseId[0])
    })
    .catch(function () {
      res.sendStatus(500)
    })
})

app.put('/update/:linenumber', function (req, res) {
  const id = req.params.linenumber
  const description = req.body.task
  console.log(typeof description)
  const status = req.body.status
  crudops.updateDB(id, description, status)
    .then(function () {
      res.sendStatus(200)
    })
    .catch(function () {
      res.sendStatus(500)
    })
})

app.put('/update/', function (req, res) {
  const status = req.body.status
  crudops.updateDBAll(status)
    .then(function () {
      res.sendStatus(200)
    })
    .catch(function () {
      res.sendStatus(500)
    })
})

app.delete('/destroy/:linenumber', function (req, res) {
  const id = req.params.linenumber
  crudops.deleteFromDB(id)
    .then(function () {
      res.sendStatus(200)
    })
    .catch(function () {
      res.sendStatus(500)
    })
})

app.delete('/destroy/', function (req, res) {
  const id = req.params.linenumber
  crudops.deleteSelectedFromDB(id)
    .then(function () {
      res.sendStatus(200)
    })
    .catch(function () {
      res.sendStatus(500)
    })
})

app.listen(3000, function () {
  console.log('Started on PORT 3000')
})
