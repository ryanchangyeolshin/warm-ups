/* global HashRouter, pokedex, createElement, queryString */

const $views = document.querySelectorAll('.view')
const router = new HashRouter($views)

router.when('list', ($view, params) => {
  const url = params.type
    ? '/api/pokedex' + queryString.stringify(params)
    : '/api/pokedex'
  return fetch(url)
    .then(res => res.json())
    .then(pokedex => {
      $view.innerHTML = ''
      $view.appendChild(renderPokedex(pokedex))
    })
})

router.when('details', ($view, params) => {
  const url = '/api/pokedex/' + params.number
  return fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      $view.innerHTML = ''
      $view.appendChild(renderPokemon(pokemon))
    })
})

router.listen()

function renderPokemon({ number, name, imgUrl, description }) {

  const $pokemon =
    createElement('div', { class: 'container-fluid' }, [
      createElement('div', { class: 'row' }, [
        createElement('div', { class: 'col-xs-12' }, [
          createElement('div', { class: 'card', 'data-number': number }, [
            createElement('img', { class: 'card-img-top', src: imgUrl, alt: name }, []),
            createElement('div', { class: 'card-body' }, [
              createElement('h4', { class: 'card-title' }, ['#', number, ' ', name]),
              createElement('p', { class: 'card-text' }, [description])
            ])
          ])
        ])
      ])
    ])

  return $pokemon
}

function renderPokedex(pokedex) {

  const $pokedex =
    createElement('div', { class: 'container-fluid' }, [
      createElement('div', { class: 'row' }, pokedex.map(({ number, imgUrl, name }) =>
        createElement('div', { class: 'col-sm-4' }, [
          createElement('div', { class: 'card', 'data-number': number }, [
            createElement('img', { class: 'card-img-top', src: imgUrl, alt: name }, [])
          ])
        ])
      ))
    ])

  $pokedex.addEventListener('click', event => {
    const $pokemon = event.target.closest('.card')
    if (!$pokemon) return
    router.push('details', { number: $pokemon.getAttribute('data-number') })
  })

  return $pokedex
}
