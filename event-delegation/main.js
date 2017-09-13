var $pokedex = document.querySelector('#pokedex')

$pokedex.addEventListener('click', function (e) {
  var $pokemonDataNumber = e.target.getAttribute('data-number')
  console.log($pokemonDataNumber)
}, false)
