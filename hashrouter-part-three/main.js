const pokedex = [
  {
    name: 'Charizard',
    type: 'fire',
    imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
  },
  {
    name: 'Magmar',
    type: 'fire',
    imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png'
  },
  {
    name: 'Blastoise',
    type: 'water',
    imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
  },
  {
    name: 'Vaporeon',
    type: 'water',
    imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png'
  },
  {
    name: 'Venusaur',
    type: 'grass',
    imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
  },
  {
    name: 'Victreebel',
    type: 'grass',
    imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png'
  }
]

function renderPokemon(pokemon) {
  const $img = document.createElement('img')
  $img.setAttribute('src', pokemon.imgUrl)
  $img.setAttribute('alt', pokemon.name)
  return $img
}

class HashRouter {
  constructor($views) {
    this.$views = Array.from($views)
    this.isListening = false
    this.handlers = {} // <-- HINT!
  }
  when(hash, handler) {
    this.handlers[hash] = handler
  }
  match(hash) {
    const handler = this.handlers[hash]
    this.$views.forEach($view => {
      $view.getAttribute('id') === hash
        ? ($view.classList.remove('hidden'), handler($view))
        : $view.classList.add('hidden')
    })
  }
  listen() {
    if (this.isListening) return
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1)
      this.match(hash)
    })
    window.dispatchEvent(new Event('hashchange'))
    this.isListening = true
  }
}

const $views = document.querySelectorAll('.view')
const router = new HashRouter($views)

router.when('fire', $view => {
  $view.innerHTML = ''
  pokedex
    .filter(pokemon => pokemon.type === 'fire')
    .map(renderPokemon)
    .forEach($pokemon => $view.appendChild($pokemon))
})

router.when('water', $view => {
  $view.innerHTML = ''
  pokedex
    .filter(pokemon => pokemon.type === 'water')
    .map(renderPokemon)
    .forEach($pokemon => $view.appendChild($pokemon))
})

router.when('grass', $view => {
  $view.innerHTML = ''
  pokedex
    .filter(pokemon => pokemon.type === 'grass')
    .map(renderPokemon)
    .forEach($pokemon => $view.appendChild($pokemon))
})

router.listen()
