
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const {users} = require('./state')

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  res.send(users)
})

app.get(`/users/:_id`, (req, res) => {
  req_url = `${req.url}`.split("/")
  req_id = req_url[2] - 1
  res.send(users[req_id])
})

app.post('/users', (req, res) => {
  let newUser = users.push({
    "_id": 6,
    "name": "Yosemite Sam",
    "occupation": "Looney Tunes",
    "avatar": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Yosemite_Sam.svg/1200px-Yosemite_Sam.svg.png"
  })
  res.send(newUser)
})

app.put('/users/1', (req, res) => {
  res.send(users[0])
})

app.delete(`/users/:_id`, (req, res) => {
  req_url = `${req.url}`.split("/")
  let newUserArray = users.filter(user => user._id != req_url[2])
  res.send(newUserArray)
})

/* END - create routes here */
app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))