const path = require('path')
const express = require('express')
const pokedex = require('./pokedex')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/pokedex', (req, res) => {
  const list = req.query.type
    ? pokedex.filter(pokemon => pokemon.type === req.query.type)
    : pokedex
  res.json(list)
})

app.get('/api/pokedex/:number', (req, res) => {
  const pokemon = pokedex.find(pokemon => pokemon.number === req.params.number)
  if (!pokemon) return res.sendStatus(404)
  res.json(pokemon)
})

app.listen(3000, () => {
  console.log('Visit http://localhost:3000')
})
