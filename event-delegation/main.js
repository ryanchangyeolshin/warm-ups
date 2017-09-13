var $pokedex = document.querySelector('#pokedex')

$pokedex.addEventListener('click', function (e) {
  var $pokemons = document.querySelectorAll('li')
  for (var i = 0; i < $pokemons.length; i++) {
    console.log($pokemons[i].getAttribute('data-number'))
  }
})
