const express = require('express')
const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost/pokemon', (err, db) => {

  if (err) {
    console.error(err)
    process.exit(1)
  }

  const pokedex = db.collection('pokedex')
  const app = express()

  app.get('/api/pokedex', (req, res) => {
    pokedex
      .find(req.query)
      .toArray()
      .then(list => res.json(list))
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })

  app.get('/api/pokedex/:number', (req, res) => {
    pokedex
      .findOne({ number: req.params.number })
      .then(pokemon => {
        if (!pokemon) return res.sendStatus(404)
        res.json(pokemon)
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })

  app.listen(3000, () => {
    console.log('Visit http://localhost:3000')
  })

})
