var $pokedex = document.querySelector('#pokedex')

$pokedex.addEventListener('click', function (e) {
  var $card = e.target.closest('.card')

  if ($card !== null) {
    var dataNumber = $card.getAttribute('data-number')
    console.log(dataNumber)
  }
})
