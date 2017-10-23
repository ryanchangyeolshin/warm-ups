const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Hello, World!")
})

app.listen(3000, err => {
  if (err) {
    console.error(err)
  }
  else {
    console.log("Listening to PORT 3000")
  }
})
